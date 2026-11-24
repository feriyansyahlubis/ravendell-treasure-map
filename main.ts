import * as fs from "node:fs";
import * as path from "node:path";
import * as crypto from "node:crypto";

// Ravendell treasure map entry: the map image lives in this repo as
// entry.png. The program copies it, byte for byte, to /output/entry.png.
// Before writing, it validates the image against the competition gate
// (whole PNG, at most 1024x1024 px, at most 1 MiB) and after writing it
// reads the output back and checks the bytes match the source exactly,
// so two runs can never silently diverge.
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const MAX_BYTES = 1048576;
const MAX_DIM = 1024;

const scriptDir = path.dirname(path.resolve(process.argv[1]));
const src = path.join(scriptDir, "entry.png");
const dst = path.join("/output", "entry.png");

fs.mkdirSync("/output", { recursive: true });
const data = fs.readFileSync(src);

// Gate 1: whole PNG (magic + IHDR with sane dimensions).
if (!data.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error("entry.png is not a PNG file");
}
if (data.length < 33 || data.toString("ascii", 12, 16) !== "IHDR") {
  throw new Error("entry.png has no IHDR chunk");
}
const width = data.readUInt32BE(16);
const height = data.readUInt32BE(20);
if (width === 0 || height === 0 || width > MAX_DIM || height > MAX_DIM) {
  throw new Error(`entry.png is ${width}x${height}, over the ${MAX_DIM}x${MAX_DIM} limit`);
}

// Gate 2: size limit.
if (data.length > MAX_BYTES) {
  throw new Error(`entry.png is ${data.length} bytes, over the ${MAX_BYTES} byte limit`);
}

fs.writeFileSync(dst, data);

// Verify: the written file must be byte-identical to the source.
const written = fs.readFileSync(dst);
if (!written.equals(data)) {
  throw new Error("output differs from source after write");
}
const sha = crypto.createHash("sha256").update(written).digest("hex");
console.log(`Wrote ${dst} (${data.length} bytes, ${width}x${height}, sha256 ${sha})`);

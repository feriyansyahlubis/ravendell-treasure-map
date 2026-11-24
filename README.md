# Isle of Ravendell — Treasure Map

![rank](https://make.fun/badge/u-ravendell-charm-the-cartographers-a-one-day-00854547.svg)
![rank](https://make.fun/badge/u-ravendell-charm-the-cartographers-a-one-day-00854547/feriyansyahlubis/ravendell-treasure-map/rank.svg)
![reward](https://make.fun/badge/u-ravendell-charm-the-cartographers-a-one-day-00854547/feriyansyahlubis/ravendell-treasure-map/reward.svg)

Entry for **Charm the Cartographers: A One Day Treasure Map Sprint**
on [make.fun](https://make.fun).

## The map

A hand-drawn-style treasure map of the **Isle of Ravendell**, an island that
does not exist, surveyed by Capt. Barnaby Wobble in 1742. Ink on old
parchment, one consistent style.

Labeled places a traveller can actually find:

- **Smuggler's Bay** — where the ship anchors, beside The Tipsy Parrot tavern
  (*last rum for 40 leagues*)
- **Dead Man's Cove** — on the southern shore
- **The Gilded Lagoon** — the blue lagoon in the south-east
- **Skull Rock** — the little islet with the skull, north-east of the island
- **Mermaid's Rest** — the northern cove
- **Whispering Palms** — the palm grove on the western slope
- **Mount Giggle** — the snowy peaks in the middle of the island
- **Kraken's Deep** — the tentacled waters of the south-east
  (*Do NOT feed the Kraken*)
- **X Marks the Spot** — the treasure itself, reached by a dotted red route
  from Smuggler's Bay, past the palms and the mountain, down the river to
  the lagoon

Plus a compass rose, a sea serpent (*Here be monsters — probably*), and a
river running from Mount Giggle into the Gilded Lagoon.

## How it works

`main.ts` (Node 22) copies the map image in this repo (`entry.png`) to
`/output/entry.png`, byte for byte. The program needs no network and writes
identical bytes on every run.

```
node main.ts
```

## Files

- `main.ts` — the entry program
- `entry.png` — the treasure map (1024×1024 PNG)
- `LICENSE` — MIT

## License

MIT — see `LICENSE`.

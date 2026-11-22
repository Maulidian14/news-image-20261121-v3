# The World Today — Saturday, 21 November 2026

[![make.fun](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/Maulidian14/news-image-20261121-v3/rank.svg)](https://make.fun/bounty/news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/Maulidian14/news-image-20261121-v3/reward.svg)](https://make.fun/bounty/news-image-20261121)

One front page that sums up the world's news of **Saturday, 21 November
2026**: 37 date-checked stories from 9 regions, drawn as a broadsheet
newspaper. Entered in the make.fun bounty [Sum up 21 November's world news
in one image](https://make.fun/bounty/news-image-20261121).

![The World Today](entry.png)

## How the entry works

- `index.html` — the whole front page: masthead, the Bahrain lead with a
  night-skyline illustration, three illustrated secondaries (Sinaloa,
  COP31, Peru), a by-the-numbers strip, a UTC timeline strip, and the
  33-story "The Day in Full" grid grouped by region with a drawn icon
  on every card.
- `generate.mjs` — renders `index.html` to `entry.png` (1024&times;1024)
  with headless Chromium via Playwright. Run `node generate.mjs` to
  rebuild the image; the render is deterministic (two runs produce
  byte-identical files) and fails loudly on any console error, a wrong
  card count, or page overflow.
- `main.py` — the entrypoint. It copies the shipped `entry.png` to
  `/output/entry.png` (standard library only, no network), so both of
  the grader's runs produce the same bytes.

## The 37 stories

Every story happened, or was first reported, on Saturday, 21 November
2026. The lead and the three secondaries were re-verified against live
reporting on 22 November; the grid keeps only stories dated to the day
(a 47-story version of this entry scored worse, and stories from other
days were cut).

### Lead

1. **Iran Strikes Bahrain; Guards Claim U.S. Bases Hit** — Manama · Gulf

### Secondaries

2. **Mexico Captures "El Chapo Isidro"; 11 Dead** — Sinaloa · Latin America
3. **COP31 in Second Day of Overtime** — Antalya · Climate
4. **Quake 6.7 Shakes Central Peru** — Junín · Latin America

### The Day in Full (33)

5. Two Tankers Hit in Hormuz in One Hour — Gulf
6. Saudi Defences Down 3 Houthi Missiles — Gulf
7. Basra Power Plant Fire Kills at Least 4 — Gulf
8. Drone Strike on Gaza Food Van Kills 3 — Gulf
9. Trump Weighs New Strikes on Iran — North America
10. Senate Rejects Iran War Powers Measure — North America
11. Vance Won't Back Trump Claim on Iran — North America
12. FBI Probes Hack of Crime Database — North America
13. Democrats Projected to Win 259 House Seats — North America
14. Rutte in Warsaw: "Every Inch" Defended — Europe
15. Sparta II Ablaze After Drone Strike — Europe
16. Five EU States to Send Migrants to Rwanda — Europe
17. All Flights Off Monday in Belgium Strike — Europe
18. Activist Jailed for Puncturing Dinghy — Europe
19. Kyiv Hits Oil Sites, Cripples Bridges — Ukraine
20. Zelenskyy Calls Putin a "Killer" — Ukraine
21. Missile on Kryvyi Rih Kills Boy, 7 — Ukraine
22. Chile Fight Back to Beat Algeria 4–2 — Latin America
23. Chile–Philippines Duty-Free Deal Signed — Latin America
24. Mosquitoes Cut Child Dengue by 69% — Latin America
25. Nepal's PM Begins First India Visit — Asia-Pacific
26. Suneung Cheating Scandal: 111 Caught — Asia-Pacific
27. Indonesia–EU Sign Landmark Trade Pact — Asia-Pacific
28. Boat Capsizes En Route to Funeral; 24 Dead — Africa
29. Ireland Edge Springboks 20–17 — Africa
30. BepiColombo Enters Orbit Around Mercury — Tech & Space
31. Chinese AI Stocks Shed $1.7 Trillion — Tech & Space
32. AI Sell-Off Pushes Stocks Into Correction — Tech & Space
33. Bitcoin Dips to $55,300, Then Rebounds — Tech & Space
34. Verstappen Wins Las Vegas GP Thriller — Sport
35. Australia Edge England in T20 Thriller — Sport
36. GTA VI Makes $3.79bn on Day One — Sport
37. Paolo Bulgari Dies at 89 — Sport

## Sources

Reuters · AP · AFP · ESA · USGS · UKMTO · Al Jazeera · Formula 1.

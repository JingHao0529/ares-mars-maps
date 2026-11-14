# ARES Mars Maps

[Open the map](https://jinghao0529.github.io/ares-mars-maps/)

A browser map for exploring Mars with NASA orbital imagery and USGS terrain data. Search 2,055 named places and 12 historic landing sites, switch between a flat map and 3D globe, and estimate journeys on foot, by rover or cargo rover.

## Run locally

Serve this folder with any static web server. No build step, account or API key is required. In the original Sites checkout the web files are in dist/.

## Data and limitations

- NASA Viking, MRO CTX, HiRISE, MOLA and THEMIS imagery.
- Measured Jezero elevation from a USGS CTX stereo terrain model. Slopes and uphill amounts are calculated from that grid.
- Outside measured coverage, routing is illustrative. It can compare historical dust activity, but cannot measure slope, elevation or hidden obstacles.
- Route time uses illustrative transport assumptions and excludes rest stops. One sol is 88,775.244 Earth seconds, following NASA Mars24.
- Landing markers show historic landing locations, not live rover positions. Approximate sites are marked.
- Optional warm tint is a display effect on grayscale imagery.

The environment option scores historical dust-storm centroid counts from selected MDSSD observing periods (7,410 high-confidence observations, Mars years 28–34). Counts are not storm footprints, probabilities or current conditions. A small travel-time penalty represents exposure preference; its weights are app assumptions. Radiation is a dated Gale Crater reference, chemistry is a Phoenix point observation, and the bundled Curiosity weather report is dated 25 August 2026. Unknown coverage is never labelled safe.

Both endpoints automatically open the 2D route map. Globe layers use bundled NASA mosaics; the mean solar clock uses NASA Mars24 equations at the start longitude.

See data/resources.json, data/hazards.json, data/sources.json, data/landings.json and vendor/ license files for provenance and third-party licenses. This is an independent exploration project, not a NASA navigation product.

## Hosting

GitHub Pages serves the root of main. All asset paths are relative, so the app works under a repository URL.

## Trip planning

The sidebar has one card for Start/Destination and a separate card for transport, results and trip planning. Add up to five searchable or map-selected stops, reorder them, set stop durations, or drag their numbered markers. Swapping endpoints reverses the stops; closing a journey clears them.

Daylight is calculated from NASA Mars24 solar-position equations, converting planetocentric map latitude to planetographic latitude with JPL/NAIF Mars radii. It uses a flat geometric horizon with no refraction, terrain shadows or atmospheric opacity. Moving intervals are sampled at up to five Earth minutes. Optional night pauses wait for a modeled sunrise, searching up to three sols ahead at each waiting location; polar-night cases ask for a later date or night travel. Departure and arrival Earth dates use UTC. The total duration and radiation reference include stops and night waits.

The range model is user-defined, not NASA vehicle capability data. Example full-charge ranges are 100 km (rover), 60 km (cargo), or a 20 km whole-trip walking budget. Vehicle charge use equals stage distance divided by full-charge range, times 100. Reserve warnings track each stage; recharging later cannot hide an unreachable earlier stage. Full recharges are explicit user assumptions and do not identify real infrastructure. Battery cold, hill loads, idle energy, ageing, and suit life support are not modeled.

The flat map repeats horizontally. Leaflet world wrapping keeps longitudes manageable; solid latitude bounds keep the view on Mars, and the widest zoom locks vertical panning. Overview, terrain and route overlays repeat with the map. Place labels, landing sites and panorama pins appear only while no route endpoint is set. Their layer switches have been removed; each remaining layer has a plain-language description.

Surface photos use CTX imagery for both native tiles and repeated overview fallbacks. The same filter is used on every imagery pane and on the globe; optional Mars colouring is applied after converting surface photos to grayscale. The separate Viking color overview retains its original color. Map and globe clicks choose Start first, then Destination; explicit Start/Destination controls still take priority.


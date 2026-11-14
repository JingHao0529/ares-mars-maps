# ARES Mars Maps

[Open the map](https://jinghao0529.github.io/ares-mars-maps/)

A browser map for exploring Mars with NASA orbital imagery and USGS terrain data. Search 2,055 named places and 12 historic landing sites, switch between a flat map and 3D globe, and estimate journeys on foot, by rover or cargo rover.

## Run locally

Serve this folder with any static web server. No build step, account or API key is required. In the original Sites checkout the web files are in dist/.

## Data and limitations

- NASA Viking, MRO CTX, HiRISE, MOLA and THEMIS imagery.
- Measured Jezero elevation from a USGS CTX stereo terrain model. Slopes and uphill amounts are calculated from that grid.
- Outside measured coverage, routing uses surface-photo texture as a rough proxy. It cannot measure slope, elevation or hidden obstacles.
- Route time uses illustrative transport assumptions and excludes rest stops. One sol is 88,775.244 Earth seconds, following NASA Mars24.
- Landing markers show historic landing locations, not live rover positions. Approximate sites are marked.
- Optional warm tint is a display effect on grayscale imagery.

See data/sources.json, data/landings.json and vendor/ license files for provenance and third-party licenses. This is an independent exploration project, not a NASA navigation product.

## Hosting

GitHub Pages serves the root of main. All asset paths are relative, so the app works under a repository URL.

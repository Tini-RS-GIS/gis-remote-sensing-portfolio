GIS & Remote Sensing Portfolio

Turbidity Index Mapping (NDTI) – Po River Delta, Italy

This project estimates water turbidity using Sentinel-2 satellite imagery in Google Earth Engine.

Methodology
- Sentinel-2 Surface Reflectance data was used
- NDWI (Normalized Difference Water Index) was calculated
- Threshold (NDWI > 0.06) applied to extract water bodies
- Water mask applied to remove non-water pixels
- NDTI (Normalized Difference Turbidity Index) calculated using Red (B4) and Green (B3)
- Spatial smoothing applied using focal mean filter

Output
- Turbidity index map showing spatial variation of suspended sediments

Tools Used
- Google Earth Engine
- QGIS (planned for visualization)

Status
- Code completed
- Map visualization in progress

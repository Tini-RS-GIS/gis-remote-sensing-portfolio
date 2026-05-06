# GIS & Remote Sensing Portfolio

Hi, I am a Master's student in Geodesy and Geoinformatics.  
This repository contains my GIS and Remote Sensing projects using Google Earth Engine and QGIS.

---

Project 1: Turbidity Index Mapping (NDTI) – Po River Delta, Italy

This project estimates water turbidity using Sentinel-2 satellite imagery in Google Earth Engine.

Methodology
- Sentinel-2 Surface Reflectance data was used  
- NDWI (Normalized Difference Water Index) was calculated  
- Threshold (NDWI > 0.06) applied to extract water bodies  
- Water mask applied to remove non-water pixels  
- NDTI (Normalized Difference Turbidity Index) calculated using Red (B4) and Green (B3)  
- Spatial smoothing applied using a focal mean filter  

Output
- Turbidity index map showing spatial variation of suspended sediments  

Tools Used
- Google Earth Engine  

Status
- Code completed  
- QGIS visualization in progress  

***

Project 2: Vegetation Mapping (NDVI) – Hamburg, Germany

This project maps vegetation density in Hamburg using Sentinel-2 satellite imagery and the Normalized Difference Vegetation Index (NDVI).

 Methodology
- Sentinel-2 Surface Reflectance data was used  
- Images were filtered for summer 2025  
- Cloud cover filter applied  
- NDVI calculated using NIR (B8) and Red (B4)  
- Visualization used a focused NDVI range (0.1–0.7) to highlight vegetation patterns  

Output
- Vegetation density map showing low, medium, and high vegetation areas  

Tools Used
- Google Earth Engine  
- QGIS  

Status
- Code completed  
- Map visualization in progress  

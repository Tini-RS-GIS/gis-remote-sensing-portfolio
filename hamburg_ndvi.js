var hamburg = geometry;

var sen = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
  .filterDate('2025-06-01', '2025-08-31')
  .filterBounds(hamburg)
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
  .median()
  .clip(hamburg);

var ndvi = sen.normalizedDifference(['B8', 'B4']).rename('NDVI');

Map.centerObject(hamburg, 10);

Map.addLayer(ndvi, {
  min: 0.1,
  max: 0.7,
  palette: ['red', 'yellow', 'green']
}, 'NDVI Hamburg');

Export.image.toDrive({
  image: ndvi,
  description: 'NDVI_Hamburg_2025',
  folder: 'GEE_Exports',
  fileNamePrefix: 'hamburg_ndvi',
  region: hamburg,
  scale: 10,
  maxPixels: 1e13
});

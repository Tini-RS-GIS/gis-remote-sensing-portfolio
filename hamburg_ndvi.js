var hamburg = ee.Geometry.Rectangle([9.7, 53.35, 10.35, 53.75]);

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
  palette: ['brown', 'yellow', 'green']
}, 'NDVI Hamburg');

var geometry = ee.Geometry.Polygon([
  [
    [11.80, 44.70],
    [12.80, 44.70],
    [12.80, 45.20],
    [11.80, 45.20],
    [11.80, 44.70]
  ]
]);

Map.centerObject(geometry);

var sen = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED")
  .filterDate('2023', '2024')
  .filterBounds(geometry)
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
  .select(['B2', 'B3', 'B4', 'B8'])
  .median()
  .multiply(0.0001);

Map.addLayer(
  sen.clip(geometry),
  {bands: ['B8', 'B4', 'B3']},
  'false color',
  false
);

var ndwi = sen.normalizedDifference(['B3', 'B8']).rename('ndwi');
Map.addLayer(ndwi.clip(geometry), {}, 'ndwi', false);
print(ui.Chart.image.histogram(ndwi, geometry, 100));
var thr = ndwi.gt(0.06);
Map.addLayer(thr.clip(geometry), {}, 'thr', false);
var sen_mask = sen.updateMask(thr);
Map.addLayer(sen_mask.clip(geometry), {}, 'sen_mask', false);
var ndti = sen_mask.normalizedDifference(['B4', 'B3']).rename('ndti');
var ndti_smooth = ndti.focal_mean(30, 'circle', 'meters');

Map.addLayer(
  ndti_smooth.clip(geometry),
  {
    min: -0.45,
    max: -0.09,
    palette: ['blue', 'green', 'yellow', 'orange', 'red']
  },
  'ndti',
  true
);


Export.image.toDrive({
  image: ndti_smooth.clip(geometry),
  description: 'Po_River_Delta_NDTI_2023',
  folder: 'GEE_Exports',
  fileNamePrefix: 'po_river_delta_ndti_2023',
  region: geometry,
  scale: 10,
  crs: 'EPSG:4326',
  maxPixels: 1e13
});

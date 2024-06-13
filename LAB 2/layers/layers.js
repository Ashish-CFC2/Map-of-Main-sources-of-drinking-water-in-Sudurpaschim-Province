ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32645").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Sudurpaschim_2 = new ol.format.GeoJSON();
var features_Sudurpaschim_2 = format_Sudurpaschim_2.readFeatures(json_Sudurpaschim_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32645'});
var jsonSource_Sudurpaschim_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sudurpaschim_2.addFeatures(features_Sudurpaschim_2);
var lyr_Sudurpaschim_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sudurpaschim_2, 
                style: style_Sudurpaschim_2,
                popuplayertitle: "Sudurpaschim",
                interactive: true,
    title: 'Sudurpaschim<br />\
    <img src="styles/legend/Sudurpaschim_2_0.png" /> 133310 - 139170<br />\
    <img src="styles/legend/Sudurpaschim_2_1.png" /> 139170 - 192234<br />\
    <img src="styles/legend/Sudurpaschim_2_2.png" /> 192234 - 224048<br />\
    <img src="styles/legend/Sudurpaschim_2_3.png" /> 224048 - 350797<br />\
    <img src="styles/legend/Sudurpaschim_2_4.png" /> 350797 - 904666<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Sudurpaschim_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_OpenStreetMap_1,lyr_Sudurpaschim_2];
lyr_Sudurpaschim_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'DISTRICT': 'DISTRICT', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Total_Case': 'Total_Case', 'no_of_hous': 'no_of_hous', 'Total_popu': 'Total_popu', 'Male': 'Male', 'Female': 'Female', 'Annual_Gro': 'Annual_Gro', 'area_in_km': 'area_in_km', 'Province water supply_Total': 'Province water supply_Total', 'Province water supply_Tap/Piped water(within premises)': 'Province water supply_Tap/Piped water(within premises)', 'Province water supply_Tap/Piped water(outside premises)': 'Province water supply_Tap/Piped water(outside premises)', 'Province water supply_Tubewell/Handpump': 'Province water supply_Tubewell/Handpump', 'Province water supply_Covered well/Kuwa': 'Province water supply_Covered well/Kuwa', 'Province water supply_Uncovered well/Kuwa': 'Province water supply_Uncovered well/Kuwa', 'Province water supply_Spout Water': 'Province water supply_Spout Water', 'Province water supply_River/Stream': 'Province water supply_River/Stream', 'Province water supply_Jar/Bottle': 'Province water supply_Jar/Bottle', 'Province water supply_Other': 'Province water supply_Other', 'Province water supply_field_12': 'Province water supply_field_12', });
lyr_Sudurpaschim_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'DISTRICT': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Total_Case': 'TextEdit', 'no_of_hous': 'TextEdit', 'Total_popu': 'TextEdit', 'Male': 'TextEdit', 'Female': 'TextEdit', 'Annual_Gro': 'TextEdit', 'area_in_km': 'TextEdit', 'Province water supply_Total': 'TextEdit', 'Province water supply_Tap/Piped water(within premises)': 'TextEdit', 'Province water supply_Tap/Piped water(outside premises)': 'TextEdit', 'Province water supply_Tubewell/Handpump': 'TextEdit', 'Province water supply_Covered well/Kuwa': 'TextEdit', 'Province water supply_Uncovered well/Kuwa': 'TextEdit', 'Province water supply_Spout Water': 'TextEdit', 'Province water supply_River/Stream': 'TextEdit', 'Province water supply_Jar/Bottle': 'TextEdit', 'Province water supply_Other': 'TextEdit', 'Province water supply_field_12': 'TextEdit', });
lyr_Sudurpaschim_2.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'DISTRICT': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Total_Case': 'hidden field', 'no_of_hous': 'hidden field', 'Total_popu': 'hidden field', 'Male': 'hidden field', 'Female': 'hidden field', 'Annual_Gro': 'hidden field', 'area_in_km': 'hidden field', 'Province water supply_Total': 'inline label - always visible', 'Province water supply_Tap/Piped water(within premises)': 'inline label - always visible', 'Province water supply_Tap/Piped water(outside premises)': 'inline label - always visible', 'Province water supply_Tubewell/Handpump': 'inline label - always visible', 'Province water supply_Covered well/Kuwa': 'inline label - always visible', 'Province water supply_Uncovered well/Kuwa': 'inline label - always visible', 'Province water supply_Spout Water': 'inline label - always visible', 'Province water supply_River/Stream': 'inline label - always visible', 'Province water supply_Jar/Bottle': 'inline label - always visible', 'Province water supply_Other': 'inline label - always visible', 'Province water supply_field_12': 'hidden field', });
lyr_Sudurpaschim_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
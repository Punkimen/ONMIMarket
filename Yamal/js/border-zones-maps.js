if ($('#map-ootp').length || $('#map-zones').length) {

    (function () {
        const zonesMap = function () {
            let map;
            let markers = [];
            let startMarkerst = mapsBorderZonesData.startBorderMarker
            let startMarkerstZones = mapsBorderZonesData.markerZonesDot

            function addMarker(position, map, title, icon, label) {
                const marker = new google.maps.Marker({
                    position,
                    map,
                    title,
                    icon,
                    label,
                });
                markers.push(marker);
            }
            function createStartMass() {
                startMarkerst.forEach(el => {
                    addMarker(el.position, el.map, el.title, el.icon, el.label)
                })

                startMarkerstZones.forEach(el => {
                    addMarker(el.position, el.map, '', el.icon, '')
                })
            }
            createStartMass()
            function setMapOnAll(map) {
                for (let i = 0; i < markers.length; i++) {
                    markers[i].setMap(map);
                }
            }
            function borderZoneMap() {
                var myLatlng = new google.maps.LatLng(68.17668157414661, 68.66484615800437);

                var mapOptions = {
                    zoom: 5,
                    center: myLatlng,
                    mapTypeControl: false,
                    overviewMapControl: false,
                    panControl: false,
                    zoomControl: false,
                    streetViewControl: false,
                    keyboardShortcuts: false,
                    styles: [
                        {
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f2f2f2"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#616161"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "color": "#f5f5f5"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.land_parcel",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#bdbdbd"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#eeeeee"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#e5e5e5"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#9e9e9e"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#dadada"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#616161"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#9e9e9e"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.line",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#e5e5e5"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.station",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#eeeeee"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#cad2d4"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#bdbdbd"
                                }
                            ]
                        }
                    ]
                };
                const borderZones = new google.maps.Polygon({
                    paths: mapsBorderZonesData.borderZonesCoord,
                    strokeColor: "#009974",
                    strokeOpacity: 0.8,
                    strokeWeight: 1,
                    fillColor: "#009974",
                    fillOpacity: 0.35,
                });
                const borderZones2 = new google.maps.Polygon({
                    paths: mapsBorderZonesData.borderZonesCoord2,
                    strokeColor: "#009974",
                    strokeOpacity: 0.8,
                    strokeWeight: 1,
                    fillColor: "#009974",
                    fillOpacity: 0.35,
                });
                const borderZones3 = new google.maps.Polygon({
                    paths: mapsBorderZonesData.borderZonesCoord3,
                    strokeColor: "#009974",
                    strokeOpacity: 0.8,
                    strokeWeight: 1,
                    fillColor: "#009974",
                    fillOpacity: 0.35,
                });
                const borderZones4 = new google.maps.Polygon({
                    paths: mapsBorderZonesData.borderZonesCoord4,
                    strokeColor: "#009974",
                    strokeOpacity: 0.8,
                    strokeWeight: 1,
                    fillColor: "#009974",
                    fillOpacity: 0.35,
                });
                const borderZones5 = new google.maps.Polygon({
                    paths: mapsBorderZonesData.borderZonesCoord5,
                    strokeColor: "#009974",
                    strokeOpacity: 0.8,
                    strokeWeight: 1,
                    fillColor: "#009974",
                    fillOpacity: 0.35,
                });
                const borderZones6 = new google.maps.Polygon({
                    paths: mapsBorderZonesData.borderZonesCoord6,
                    strokeColor: "#009974",
                    strokeOpacity: 0.8,
                    strokeWeight: 1,
                    fillColor: "#009974",
                    fillOpacity: 0.35,
                });
                const borderZones7 = new google.maps.Polygon({
                    paths: mapsBorderZonesData.borderZonesCoord7,
                    strokeColor: "#009974",
                    strokeOpacity: 0.8,
                    strokeWeight: 1,
                    fillColor: "#009974",
                    fillOpacity: 0.35,
                });
                map = new google.maps.Map(document.getElementById('map-zones'), mapOptions);
                setMapOnAll(map)
                borderZones.setMap(map);
                borderZones2.setMap(map);
                borderZones3.setMap(map);
                borderZones4.setMap(map);
                borderZones5.setMap(map);
                borderZones6.setMap(map);
                borderZones7.setMap(map);
            }


            // borderZones.setMap(map);
            google.maps.event.addDomListener(window, 'load', borderZoneMap);
        }
        zonesMap()
        const ootpMap = function () {
            let map;
            let markers = [];
            let startMarkerst = mapsBorderZonesData.startBorderMarker
            let startMarkerstZones = mapsBorderZonesData.ootpZonesMarker
            let borderZoneCoord = mapsBorderZonesData.ootpZones
            function addMarker(position, map, title, icon, label) {
                const marker = new google.maps.Marker({
                    position,
                    map,
                    title,
                    icon,
                    label,
                });
                markers.push(marker);
            }
            function createStartMass() {
                startMarkerst.forEach(el => {
                    addMarker(el.position, el.map, el.title, el.icon, el.label)
                })
                startMarkerstZones.forEach(el => {
                    addMarker(el.position, el.map, el.title, el.icon, el.label)
                })
            }
            createStartMass()
            function setMapOnAll(map) {
                for (let i = 0; i < markers.length; i++) {
                    markers[i].setMap(map);
                }
            }
            function borderZoneMap() {
                var myLatlng = new google.maps.LatLng(68.17668157414661, 68.66484615800437);
                console.log(borderZoneCoord);

                var mapOptions = {
                    zoom: 5,
                    center: myLatlng,
                    mapTypeControl: false,
                    overviewMapControl: false,
                    panControl: false,
                    zoomControl: false,
                    streetViewControl: false,
                    keyboardShortcuts: false,
                    styles: [
                        {
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f2f2f2"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#616161"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "color": "#f5f5f5"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.land_parcel",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#bdbdbd"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#eeeeee"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#e5e5e5"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#9e9e9e"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#dadada"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#616161"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#9e9e9e"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.line",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#e5e5e5"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.station",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#eeeeee"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#cad2d4"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#bdbdbd"
                                }
                            ]
                        }
                    ]
                };
                const ootpZones = new google.maps.Polygon({
                    paths: mapsBorderZonesData.ootpZonesPark,
                    strokeColor: "#009974",
                    strokeOpacity: 0.8,
                    strokeWeight: 1,
                    fillColor: "#009974",
                    fillOpacity: 0.35,
                });
                const ootpZones2 = new google.maps.Polygon({
                    paths: mapsBorderZonesData.ootpZonesNature,
                    strokeColor: "#009974",
                    strokeOpacity: 0.8,
                    strokeWeight: 1,
                    fillColor: "#009974",
                    fillOpacity: 0.35,
                });
                map = new google.maps.Map(document.getElementById('map-ootp'), mapOptions);
                setMapOnAll(map)
                ootpZones.setMap(map);
                ootpZones2.setMap(map);
            }
            google.maps.event.addDomListener(window, 'load', borderZoneMap);
        }
        ootpMap()
        $('.choosen-radio-maps').on('change', function () {
            let val = $(this).val();
            if (val == 'ootp') {
                $('#map-ootp').show();
                $('#map-zones').hide();
            } else if (val == 'border-zones') {
                $('#map-zones').show();
                $('#map-ootp').hide();
            }
        })
    })();
}
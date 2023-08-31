if ($('#aurora-map').length) {
    (function () {
        const auroraMap = function () {
            let map;
            let markers = [];
            let startMarkerst = mapsAuroraData.startMarkerFirst
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
            }
            createStartMass()
            function setMapOnAll(map) {
                for (let i = 0; i < markers.length; i++) {
                    markers[i].setMap(map);
                }
            }
            function borderZoneMap() {
                myLatlng = new google.maps.LatLng(67.01156439141535, 73.95476052039851);

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

                map = new google.maps.Map(document.getElementById('aurora-map'), mapOptions);
                setMapOnAll(map)

            }
            google.maps.event.addDomListener(window, 'load', borderZoneMap);
        }
        auroraMap()
    })();
}
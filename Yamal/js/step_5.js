if ($('#build-way__map').length) {
    (function () {
        const secondMap = function () {
            const lineSymbol = {
                path: "M 0,-1 0,1",
                strokeOpacity: 1,
                scale: 1,
                strokeWeight: 2,
                strokeColor: "#213A8F",
            };
            let myLatlng
            let flightPathCoordinates = [];
            let oldCordinates = [];
            let flightPath;
            let map;
            let markers = [];
            let startMarkerst = mapsData.startMarkersYourWay
            // createCoordinates
            function createCoordinates([...markers]) {
                flightPathCoordinates = [];
                markers.forEach(el => {
                    flightPathCoordinates.push(el)
                    console.log(el);

                })
                // let startPoint = {}
                flightPath = new google.maps.Polyline({
                    path: flightPathCoordinates,
                    strokeOpacity: 0,
                    icons: [
                        {
                            icon: lineSymbol,
                            offset: "0",
                            repeat: "6px",
                        },
                    ]
                })
                oldCordinates.push(flightPath)
            }
            // добавить линию
            function addLine() {
                flightPath.setMap(map);
            }
            // убрать линию
            function removeLine() {
                oldCordinates.forEach(el => {
                    el.setMap(null);
                })
            }
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
            function initializeBuildMap() {
                myLatlng = new google.maps.LatLng(66.53256297859949, 66.60141403516596);

                var mapOptions = {
                    zoom: 14,
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
                map = new google.maps.Map(document.getElementById('build-way__map'), mapOptions);
                setMapOnAll(map)
            }
            document.addEventListener('click', e => {
                if (e.target.closest('.build-list__date-label')) {
                    $('.current-date-way').text(e.target.closest('.build-list__date-label').textContent)
                    createCoordinates(mapsData.markersRenderYourWay)
                    removeLine()
                    setTimeout(addLine, 200)
                }
            })
            google.maps.event.addDomListener(window, 'load', initializeBuildMap);
        }
        secondMap()
    })();
}
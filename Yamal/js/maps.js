if ($('#map').length) {
    (function () {
        let stepCount = 0;
        // maps sеtting

        const firstMap = function () {
            let myLatlng
            let flightPathCoordinates = [];
            let oldCordinates = [];
            let flightPath;
            let map;
            let markers = [];
            let fromMarker = [];
            let startMarkerst = mapsData.startMarkerFirst;
            let lightMarkers = mapsData.lightMarkerFirstMap;
            let cityMarkersFrom = mapsData.cityMarkersFrom;
            const lineSymbol = {
                path: "M 0,-1 0,1",
                strokeOpacity: 1,
                scale: 1,
                strokeWeight: 2,
                strokeColor: "#213A8F",
            };
            // Создаем маркеры в markers
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
            // отдельный массив для городов России
            function addMarkerFrom(position, map, title, icon, label) {
                const marker = new google.maps.Marker({
                    position,
                    map,
                    title,
                    icon,
                    label,
                });
                fromMarker.push(marker);
            }
            function createStartMass() {
                startMarkerst.forEach(el => {
                    addMarker(el.position, el.map, el.title, el.icon, el.label)
                })
            }
            createStartMass();

            // Sets the map on all markers in the array.
            function setMapOnAll(map) {
                for (let i = 0; i < markers.length; i++) {
                    markers[i].setMap(map);
                }
                for (let i = 0; i < fromMarker.length; i++) {
                    fromMarker[i].setMap(map);
                }
            }
            // createCoordinates
            function createCoordinates(marker1, marker2) {
                flightPathCoordinates = [];
                flightPathCoordinates.push(marker1, marker2)
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
            // отфильровать массивы, чтобы получить 2 города
            function filterMarkers(name) {
                markers = markers.filter(el => name === el.title)
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
            // Removes the markers from the map, but keeps them in the array.
            function hideMarkers() {
                for (let i = 0; i < markers.length; i++) {
                    markers[i].setMap(null);
                }
                for (let i = 0; i < fromMarker.length; i++) {
                    fromMarker[i].setMap(null);
                }
            }
            // Shows any markers currently in the array.
            function showMarkers() {
                setMapOnAll(map);
            }
            // add cityFrom
            const inputsCityFrom = $('.choosen-radio-from');
            const inputsCityTo = $('.choosen-radio-to');
            // add distance block
            function createDistanceBlock(distance) {
                return new google.maps.InfoWindow({
                    content: distance
                })
            }
            function initialize() {
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
                map = new google.maps.Map(document.getElementById('map'), mapOptions);

                setMapOnAll(map)

                function createWayOnMap() {
                    let name = $('#city-to-value').text().trim()
                    hideMarkers()
                    createStartMass()
                    filterMarkers(name);
                    createDistanceBlock("2165 км").open(map, markers[0])
                    createCoordinates(fromMarker[0].position, markers[0].position);
                    removeLine()
                    setTimeout(addLine, 100);
                    showMarkers()
                }
                $('#add-light-map').on('click', function () {
                    hideMarkers()
                    markers = []
                    $(this).toggleClass('active')
                    if ($(this).hasClass('active')) {
                        lightMarkers.forEach(el => {
                            addMarker(el.position, el.map, el.title, el.icon, el.label)
                        })
                    } else {
                        startMarkerst.forEach(el => {
                            addMarker(el.position, el.map, el.title, el.icon, el.label)
                        })
                    }
                    markers.forEach(el => {
                        el.addListener('click', function (e) {
                            let val = this.title;
                            $('#city-to-value').text(val);
                            $('.enter-banner__where').addClass('filed')
                            if ($('.enter-banner__from ').hasClass('filed') && $('.enter-banner__where').hasClass('filed')) {
                                createWayOnMap()
                            }

                        })
                    })
                    setMapOnAll(map)
                })
                inputsCityFrom.on('change', function () {
                    for (let i = 0; i < fromMarker.length; i++) {
                        fromMarker[i].setMap(null);
                    }
                    fromMarker = [];
                    let i = +$(this).val();
                    addMarkerFrom(cityMarkersFrom[i].position, cityMarkersFrom[i].map, cityMarkersFrom[i].title, cityMarkersFrom[i].icon, cityMarkersFrom[i].label);
                })
                inputsCityFrom.on('change', function () {
                    if ($('.enter-banner__from ').hasClass('filed') && $('.enter-banner__where').hasClass('filed')) {
                        createWayOnMap()
                    }
                });
                inputsCityTo.on('change', function () {
                    if ($('.enter-banner__from').hasClass('filed') && $('.enter-banner__where').hasClass('filed')) {
                        createWayOnMap()
                    }
                })
                markers.forEach(el => {
                    el.addListener('click', function (e) {
                        let val = this.title;
                        $('#city-to-value').text(val);
                        $('.enter-banner__where').addClass('filed')
                        if ($('.enter-banner__from ').hasClass('filed') && $('.enter-banner__where').hasClass('filed')) {
                            createWayOnMap()
                        }

                    })
                })
            }

            google.maps.event.addDomListener(window, 'load', initialize);
        }
        firstMap()
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
            let map1;
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
                flightPath.setMap(map1);
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
                map1 = new google.maps.Map(document.getElementById('build-way__map'), mapOptions);
                setMapOnAll(map1)


            }
            document.addEventListener('click', e => {
                if (e.target.closest('.build-list__date-label')) {
                    $('.current-date-way').text(e.target.closest('.build-list__date-label').textContent)
                    createCoordinates(mapsData.markersRenderYourWay)
                    // switch (e.target.closest('.build-list__date-label').getAttribute('data-num')) {
                    //     case '1':
                    //         createCoordinates(markers[1].position, markers[2].position, markers[3].position)
                    //         break
                    //     case '2':
                    //         createCoordinates(markers[2].position, markers[1].position, markers[3].position)
                    //         break
                    //     case '3':
                    //         createCoordinates(markers[1].position, markers[4].position, markers[2].position)
                    //         break
                    //     case '4':
                    //         createCoordinates(markers[1].position, markers[2].position, markers[4].position)
                    //         break
                    //     case '5':
                    //         createCoordinates(markers[2].position, markers[4].position, markers[3].position)
                    //         break
                    //     case '6':
                    //         createCoordinates(markers[2].position, markers[4].position, markers[3].position)
                    //         break
                    //     case '6':
                    //         createCoordinates(markers[1].position, markers[4].position, markers[3].position)
                    //         break
                    // }

                    removeLine()
                    setTimeout(addLine, 200)
                    // addLine()
                }
            })

            google.maps.event.addDomListener(window, 'load', initializeBuildMap);
        }
        secondMap()
        const thridMap = function () {
            let flightPath;
            let map;
            let markers = [];
            let startMarkerst = mapsData.startMarkersHostelMap
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
            function initializeChoosedMap() {
                var myLatlng = new google.maps.LatLng(66.53256297859949, 66.60141403516596);
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
                map = new google.maps.Map(document.getElementById('catalog-choose__map'), mapOptions);
                setMapOnAll(map)
                // var marker1 = new google.maps.Marker({
                //     position: pos1,
                //     map: map,
                //     title: 'Хостел «Хмель и Соль»',
                //     icon: {
                //         url: "img/icon/btn-location.svg",
                //         scaledSize: new google.maps.Size(32, 32)
                //     },
                //     label: {
                //         text: "Хостел «Хмель и Соль»",
                //         color: "#213A8F",
                //         fontWeight: "bold",
                //         fontSize: "12px",
                //         className: "map-label"
                //     }

                // });
                // var marker2 = new google.maps.Marker({
                //     position: pos2,
                //     map: map,
                //     title: 'Тазовский',
                //     icon: {
                //         url: "img/icon/btn-location.svg",
                //         scaledSize: new google.maps.Size(32, 32)
                //     },
                //     label: {
                //         text: "Тазовский",
                //         color: "#213A8F",
                //         fontWeight: "bold",
                //         fontSize: "12px",
                //         className: "map-label"
                //     }
                // });
                // var marker3 = new google.maps.Marker({
                //     position: pos3,
                //     map: map,
                //     title: 'Хостел «Ямбург»',
                //     icon: {
                //         url: "img/icon/btn-location.svg",
                //         scaledSize: new google.maps.Size(32, 32)
                //     },
                //     label: {
                //         text: "Хостел «Ямбург»",
                //         color: "#213A8F",
                //         fontWeight: "bold",
                //         fontSize: "12px",
                //         className: "map-label"
                //     }
                // });
                // var marker4 = new google.maps.Marker({
                //     position: pos4,
                //     map: map,
                //     title: 'Хостел «У Урсулы»',
                //     icon: {
                //         url: "img/icon/btn-location.svg",
                //         scaledSize: new google.maps.Size(32, 32)
                //     },
                //     label: {
                //         text: "Хостел «У Урсулы»",
                //         color: "#213A8F",
                //         fontWeight: "bold",
                //         fontSize: "12px",
                //         className: "map-label"
                //     }
                // });
                // var marker5 = new google.maps.Marker({
                //     position: pos5,
                //     map: map,
                //     title: 'Хостел «Хмель и Соль»',
                //     icon: {
                //         url: "img/icon/btn-location.svg",
                //         scaledSize: new google.maps.Size(32, 32)
                //     },
                //     label: {
                //         text: "Хостел «Хмель и Соль»",
                //         color: "#213A8F",
                //         fontWeight: "bold",
                //         fontSize: "12px",
                //         className: "map-label"
                //     }
                // });
                // var marker6 = new google.maps.Marker({
                //     position: pos6,
                //     map: map,
                //     title: 'Отель «Сибирь»',
                //     icon: {
                //         url: "img/icon/btn-location.svg",
                //         scaledSize: new google.maps.Size(32, 32)
                //     },
                //     label: {
                //         text: "Отель «Сибирь»",
                //         color: "#213A8F",
                //         fontWeight: "bold",
                //         fontSize: "12px",
                //         className: "map-label"
                //     }
                // });
                function generateCard(title) {
                    const mapContainer = document.querySelector('.catalog-choose__map-cards');
                    mapContainer.textContent = ''
                    const cardElem = document.createElement('div');
                    cardElem.className = 'catalog__wrapper-item card-item photo hovered map-card';
                    cardElem.innerHTML = `
                <a href="">
                    <div class="card-item__img">
                        <img src="img/cards/card-restor_1.png" alt="Отель «Ямбург»">
                    </div>
                    <div class="card-item__footer">
                        <div class="card-item__name">${title}</div>
                        <div class="descr-block__text">
                            10:00 - 22:00 для регистрации
                        </div>
                    </div>
                </a>
                <button type="button" data-type="only" class="choose-btn btn btn-transparent map-choose">
                    <span class="choose-btn__status">Выбрать</span>
                    <div class="choose-btn__icon">
                        +
                    </div>
                </button>
                `
                    mapContainer.append(cardElem)

                }
                function removeCard() {
                    const mapContainer = document.querySelector('.catalog-choose__map-cards');
                    mapContainer.textContent = ''
                }
                document.addEventListener('click', function (e) {
                    if (e.target.closest('.map-choose')) {
                        if (!e.target.closest('.map-choose').classList.contains('current')) {
                            e.target.closest('.map-choose').classList.remove('current');
                        } else {
                            e.target.closest('.map-choose').classList.add('current');
                        }
                    }
                })
                markers.forEach(el => {
                    el.addListener('click', function (e) {
                        generateCard(this.title)
                    })
                })
            }
            google.maps.event.addDomListener(window, 'load', initializeChoosedMap);
        }
        thridMap()


        // maps sеtting end

        // Steps

        const $steps = $('.steps-planning__step');
        const selectInputs = $('.enter-banner__input .custom-select');
        const values = document.querySelectorAll('#planning-form .custom-select__current-elem');

        const nextStep = function () {
            stepCount++;
            $steps.removeClass('show')
            $steps.eq(stepCount).addClass('show');
            $('.catalog-choose__catalog').show()
            if (stepCount > 1) {
                $('#repeat-step-btn').addClass('show')
                $('#next-step-btn').removeClass('show')

            } else if (stepCount > 0) { $('.enter-banner__form').addClass('only-btn') }
        }
        const prevStep = function () {
            stepCount--;
            $steps.removeClass('show')
            $steps.eq(stepCount).addClass('show');
            if (stepCount == 0) {
                $('#repeat-step-btn').removeClass('show')
                $('#next-step-btn').addClass('show')
                $('.enter-banner__form').removeClass('only-btn')
            };
        }
        $('#next-step-btn').on('click', function () {
            let fieldForm = true;
            selectInputs.each((index, el) => {
                if (!el.classList.contains('filed')) {
                    console.log(el);
                    el.classList.add('error')
                    fieldForm = false
                } else {
                    el.classList.remove('error')
                    fieldForm = true
                }
            })
            if (fieldForm === true && stepCount === 0) {
                nextStep()
                $(this).removeClass('show');
                $('#repeat-step-btn').addClass('show');
                $('#planning-form .custom-select__header').addClass('disabled')
                $('#planning-form .costum-calendar').prop('disabled', true)
                values.forEach(el => {
                    localStorage.setItem(el.getAttribute('data-title'), el.textContent)
                })
            }
        })
        $('#repeat-step-btn').on('click', function () {
            // stepCount = 0;
            // $steps.removeClass('show')
            // $steps.eq(stepCount).addClass('show');
            // $('#planning-form .custom-select__header').removeClass('disabled')
            // $(this).removeClass('show');
            // $('#next-step-btn').addClass('show'); $('.enter-banner__form').removeClass('only-btn');
            // $('.choosen-radio').prop('checked', false);
            // selectInputs.removeClass('filed')
            // $('.enter-banner__input').removeClass('show-title')
            // $('#city-from-value').text($('#city-from-value').attr('data-title'))
            // $('#city-to-value').text($('#city-to-value').attr('data-title'))
            // $('#calendar-value').html(`<span class="calendar-value__start">Когда</span>
            // <span class="calendar-value__finish"></span>`)
            // $('#type-of-recreation').text($('#type-of-recreation').attr('data-title'))
            location.reload();
        })
        $('.btn-next').on('click', function () {
            if (stepCount == 1 && !$('.choose-btn--hostel').hasClass('current') || stepCount == 2 && !$('.choose-btn--etertainment').hasClass('current')) {
                return false;
            } else
                if (stepCount < $steps.length - 1) {
                    nextStep()
                }
        });
        $('.btn-back').on('click', function () {
            if (stepCount > 0) {
                prevStep()
            }
        })
        $('.btn-end').on('click', function () {
            $('.build-way__hendler').hide()
            $('.build-way__hendler--done').addClass('done')
            $('.build-plan__checkbox input').prop('disabled', true);
            $('.build-plan__elem').addClass('done')
            let indexCount = 0
            if ($('.build-plan__list').css('display') === 'none') {
                $('.build-plan__list-date .build-plan__icon-drag').each((index, el) => {
                    indexCount++
                    el.innerHTML = `<span class="build-plan__num">${indexCount}</span>`
                })
            } else {
                $('.build-plan__icon-drag').each((index, el) => {
                    indexCount++
                    el.innerHTML = `<span class="build-plan__num">${indexCount}</span>`
                })
            }

        })
        // Steps end

        // choose btn
        $('.catalog-choose__type-search .btn').on('click', function () {
            if ($(this).attr('data-value') === 'list-search') {
                $('.catalog-choose__catalog').show()
                $('.catalog-choose__map').hide()
            } else if ($(this).attr('data-value') === 'map-search') {
                $('.choose-btn[data-type="only"]').removeClass('current')
                $('.choose-btn[data-type="only"]').prop('disabled', false);
                $('.catalog-choose__catalog').hide()
                $('.catalog-choose__map').show()
            }
        })
        document.addEventListener('click', function (e) {
            const btnsOnly = document.querySelectorAll('.choose-btn[data-type="only"]')
            if (e.target.closest('.choose-btn')) {
                let btnChoose = e.target.closest('.choose-btn')
                if (btnChoose.getAttribute('data-type') === "only") {
                    if (btnChoose.closest('.current')) {
                        btnChoose.classList.remove('current')
                        btnsOnly.forEach(el => {
                            if (!el.closest('.current')) {
                                el.disabled = false;
                            }
                        })
                    } else {
                        btnChoose.classList.add('current');
                        btnsOnly.forEach(el => {
                            if (!el.closest('.current')) {
                                el.disabled = true;
                            }
                        })
                    }
                } else {
                    if (btnChoose.closest('.current')) {
                        btnChoose.classList.remove('current')
                    } else {
                        btnChoose.classList.add('current');
                    }
                }
            }
        })
        // $('.choose-btn').on('click', function () {
        //     if ($(this).attr('data-type') === "only") {
        //         if ($(this).hasClass('current')) {
        //             $(this).removeClass('current');
        //             $('.choose-btn').prop('disabled', false);
        //             $(this).prop('disabled', false);
        //         } else {
        //             $(this).addClass('current');
        //             $('.choose-btn[data-type="only"]').prop('disabled', true);
        //             $(this).prop('disabled', false);
        //         }
        //     } else {
        //         if ($(this).hasClass('current')) {
        //             $(this).removeClass('current');
        //         } else {
        //             $(this).addClass('current');
        //         }
        //     }
        // })
        // choose btn end
    })();
}
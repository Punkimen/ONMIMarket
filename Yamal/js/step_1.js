
$('.city-description__tabs-scroll').mCustomScrollbar({
    axis: "x",
    alwaysShowScrollbar: 0
});
$('.tabs-arrow__prev').on('click', function () {
    $('.city-description__tabs-scroll').mCustomScrollbar("scrollTo", "+=120");

})
$('.tabs-arrow__next').on('click', function () {
    $('.city-description__tabs-scroll').mCustomScrollbar("scrollTo", "-=120");
})

function showAboutCity(id) {
    $('.city-description__slide').removeClass('active')
    $(`.city-description__photo`).removeClass('show')
    $('.city-description__item').removeClass('show')
    $(`.city-description__slide[data-id=${id}]`).addClass('active')
    $(`.city-description__photo[data-id=${id}]`).addClass('show')
    $(`.city-description__item[data-id=${id}]`).addClass('show')
}

$('.city-description__slide').on('click', function (e) {
    e.preventDefault()
    let id = $(this).attr('data-id')
    showAboutCity(id)
    // $(this).addClass('active').siblings().removeClass('active')
    // $(`.city-description__photo`).removeClass('show')
    // $('.city-description__item').removeClass('show')
    // $(`.city-description__photo[data-id=${id}]`).addClass('show')
    // $(`.city-description__item[data-id=${id}]`).addClass('show')
})
function aboutCity(city) {
    $('.planning-hints__text').addClass('underline')
    $('.planning-hints__text').text(`Подробнее про ${city}`)
    $('.planning-hints__text').attr('scroll-href', '#city-description')
    $('.planning-hints__text').css({ 'cursor': 'pointer' })
}
// aboutCity('Салехард')



function adaptiveTabs() {
    let windowWidth = $(window).width()
    if (windowWidth <= 992) {
        $('.city-description').prepend($('.city-description__tabs'))
    } else {
        $('.city-description__all').prepend($('.city-description__tabs'))
    }
}
adaptiveTabs()

function adaptiveHints() {
    let windowWidth = $(window).width()
    if (windowWidth <= 568) {
        $('.planning-hints__text').text('Подробне про города Ямала')
        $('.planning-hints__text').attr('scroll-href', '#city-description')
    } else {
        $('.planning-hints__text').text('Выберите город на карте и мы расскажем про него подробнее')
        $('.planning-hints__text').attr('scroll-href', '')
    }
}
adaptiveHints()
$(window).resize(() => {
    adaptiveTabs()
    adaptiveHints()
})

$("[scroll-href]").on('click', function (e) {
    console.log('#');

    e.preventDefault()
    let element = $(this).attr("scroll-href");

    let dist = $(element).offset().top;

    $("html, body").animate({
        "scrollTop": dist,
    }, 1000)
    return false;
})




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
    function addMarker(position, map, title, icon, label, id) {
        const marker = new google.maps.Marker({
            id,
            position,
            map,
            title,
            icon,
            label,
        });
        markers.push(marker);
    }
    // отдельный массив для городов России
    function addMarkerFrom(position, map, title, icon, label, id) {
        const marker = new google.maps.Marker({
            id,
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
            addMarker(el.position, el.map, el.title, el.icon, el.label, el.id)
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
                    addMarker(el.position, el.map, el.title, el.icon, el.label, el.id)
                })
            } else {
                startMarkerst.forEach(el => {
                    addMarker(el.position, el.map, el.title, el.icon, el.label, el.id)
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
            let id = $(this).attr('data-id')
            let val = $(this).val()

            showAboutCity(id)
            aboutCity(val)
        })
        markers.forEach(el => {
            el.addListener('click', function (e) {
                let val = this.title;
                let id = this.id
                showAboutCity(id)
                aboutCity(val)
                console.log(this.id);
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
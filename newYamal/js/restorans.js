
const reviewsSlider = new Swiper('.reviews__slider', {
  slidesPerView: "auto",
  breakpoints: {
    768: {
      spaceBetween: 12
    },
    990: {
      spaceBetween: 20
    }
  }
})
const windowWidth = $(window).width()

$('.review-item__arrow--prev').on('click', function () {
  reviewsSlider.slidePrev()
})
$('.review-item__arrow--next').on('click', function () {
  reviewsSlider.slideNext()
})

let widht = $(window).width()

if (windowWidth < 767) {
  reviewsSlider.destroy(true, true)
}

// map
const cardMap = function () {
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
    var myLatlng = new google.maps.LatLng(66.07715314564803, 76.68674824681685);
    var mapOptions = {
      zoom: 16,
      center: myLatlng,
      mapTypeControl: false,
      overviewMapControl: false,
      panControl: false,
      zoomControl: true,
      streetViewControl: false,
      keyboardShortcuts: false,
      styles: [
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        }
      ]
    };
    map = new google.maps.Map(document.getElementById('gmap'), mapOptions);
    setMapOnAll(map)

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

  }
  google.maps.event.addDomListener(window, 'load', initializeChoosedMap);
}
cardMap()

$('.show-route-js').on('click', function () {
  $('.route-menu').toggleClass('show')
})
$('.route-menu__hidden-btn').on('click', function () {
  $('.route-menu').removeClass('show')
})
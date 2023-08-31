$(document).ready(function () {



  const photos = [
    {
      id: 0,
      src: 'img/gallery/photo_1/1.jpeg'
    }, {
      id: 0,
      src: 'img/gallery/photo_1/2.jpg'
    }, {
      id: 0,
      src: 'img/gallery/photo_1/3.jpg'
    }, {
      id: 0,
      src: 'img/gallery/photo_1/4.jpg'
    }, {
      id: 0,
      src: 'img/gallery/photo_1/5.jpg'
    }, {
      id: 0,
      src: 'img/gallery/photo_1/6.jpg'
    }, {
      id: 0,
      src: 'img/gallery/photo_1/7.jpg'
    }, {
      id: 0,
      src: 'img/gallery/photo_1/8.jpg'
    }, {
      id: 0,
      src: 'img/gallery/photo_1/9.jpg'
    }, {
      id: 0,
      src: 'img/gallery/photo_1/10.jpg'
    }, {
      id: 0,
      src: 'img/gallery/photo_1/11.jpg'
    }, {
      id: 0,
      src: 'img/gallery/photo_1/12.jpg'
    }, {
      id: 0,
      src: 'img/gallery/photo_1/13.jpg'
    }, {
      id: 0,
      src: 'img/gallery/photo_1/14.jpg'
    }, {
      id: 0,
      src: 'img/gallery/photo_1/15.jpg'
    }, {
      id: 0,
      src: 'img/gallery/photo_1/16.jpg'
    }, {
      id: 0,
      src: 'img/gallery/photo_1/17.jpg'
    }, {
      id: 0,
      src: 'img/gallery/photo_1/18.jpg'
    }, {
      id: 0,
      src: 'img/gallery/photo_1/19.jpg'
    }, {
      id: 0,
      src: 'img/gallery/photo_1/20.jpg'
    }, {
      id: 0,
      src: 'img/gallery/photo_1/21.jpg'
    }, {
      id: 0,
      src: 'img/gallery/photo_1/22.jpg'
    }, {
      id: 0,
      src: 'img/gallery/photo_1/23.jpg'
    }, {
      id: 0,
      src: 'img/gallery/photo_1/24.jpg'
    },
    {
      id: 0,
      src: 'img/gallery/photo_1/25.jpg'
    },
  ]

  const videos = [{
    id: 0,
    src: './img/gallery/video_2/1.mp4',
    srcPhoto: 'img/gallery/photo_1/1.jpeg'
  }, {
    id: 0,
    src: './img/gallery/video_2/2.mp4',
    srcPhoto: 'img/gallery/photo_1/2.jpg'
  }, {
    id: 0,
    src: './img/gallery/video_2/3.mp4',
    srcPhoto: 'img/gallery/photo_1/3.jpg'
  }, {
    id: 0,
    src: './img/gallery/video_2/4.mp4',
    srcPhoto: 'img/gallery/photo_1/4.jpg'
  }, {
    id: 0,
    src: './img/gallery/video_2/6.mp4',
    srcPhoto: 'img/gallery/photo_1/5.jpg'
  }, {
    id: 0,
    src: './img/gallery/video_2/8.mp4',
    srcPhoto: 'img/gallery/photo_1/6.jpg'
  }, {
    id: 0,
    src: './img/gallery/video_2/9.mp4',
    srcPhoto: 'img/gallery/photo_1/7.jpg'
  }, {
    id: 0,
    src: './img/gallery/video_2/10.mp4',
    srcPhoto: 'img/gallery/photo_1/8.jpg'
  },
  ]

  const windowWidth = $(window).width();

  const quantityConst = windowWidth < 568 ? 6 : 18;
  let quantity = windowWidth < 568 ? 6 : 18;
  let nextIndexes = 0
  let startCountPagination = 1

  $('.gallery-tabs__tab').on('click', function (e) {
    e.preventDefault();
    $('.gallery-tabs__tab').removeClass('active')
    $(this).addClass('active')
    let el = $(this).attr('data-gallery');
    $('.gallery-tabs__body').hide()
    $(el).show()
    nextIndexes = 0
    quantity = windowWidth < 568 ? 6 : 18;
    startCountPagination = 1
    renderPhotoGallery(photos, quantity, nextIndexes)
    renderVideoGallery(videos, quantity, nextIndexes)
    setPaginations(photos, quantity, startCountPagination, $('#start-count'), $('#end-count'))
    setPaginations(videos, quantity, startCountPagination, $('#start-count_videos'), $('#end-count_videos'))
  })


  const renderPhotoGallery = (arr, quantity, nextIndexes) => {
    let inner = $('.gallery-tabs__wrapper')
    inner.html('')
    arr.forEach((el, index) => {
      if ((index < quantity) && (index >= nextIndexes)) {
        const block = document.createElement('div')
        block.classList.add('gallery-tabs__photo')
        block.innerHTML = `
        <a href="${el.src}" title="">
          <img src="${el.src}">
        </a>
        `
        inner.append(block)
      }
    })
  }
  const renderVideoGallery = (arr, quantity) => {
    let inner = $('#gallery-video .gallery-video__wrapper')
    inner.html('')
    arr.forEach((el, index) => {
      if ((index < quantity) && (index >= nextIndexes)) {
        const block = document.createElement('div')
        block.classList.add('gallery-tabs__photo')
        block.innerHTML = `
        <a href="${el.src}" class="video">
        <img src="${el.srcPhoto}">
        </a>
        `
        let inner = $('#gallery-video .gallery-video__wrapper')
        inner.append(block)
      }
    })
  }

  const setPaginations = (arr, quantity, startCountPagination, elStart, elEnd) => {
    let length = arr.length
    let endCount = Math.ceil(length / quantityConst)
    elStart.text(startCountPagination)
    elEnd.text(endCount)
  }
  renderPhotoGallery(photos, quantity, nextIndexes)
  renderVideoGallery(videos, quantity, nextIndexes)
  setPaginations(photos, quantity, startCountPagination, $('#start-count'), $('#end-count'))
  setPaginations(videos, quantity, startCountPagination, $('#start-count_videos'), $('#end-count_videos'))

  const nextRender = (arr, elStart, elEnd, cb) => {
    if (startCountPagination < arr.length / quantityConst) {
      startCountPagination += 1
      nextIndexes += quantityConst
      quantity += quantityConst
      cb(arr, quantity, nextIndexes)
      setPaginations(arr, quantity, startCountPagination, elStart, elEnd)
    }

  }
  const prevRender = (arr, elStart, elEnd, cb) => {
    if (startCountPagination > 1) {
      startCountPagination -= 1
      quantity -= quantityConst
      nextIndexes -= quantityConst
      cb(arr, quantity, nextIndexes)
      setPaginations(arr, quantity, startCountPagination, elStart, elEnd)
    }
  }

  $('#next-btn').on('click', function () {
    nextRender(photos, $('#start-count'), $('#end-count'), renderPhotoGallery)
  })
  $('#prev-btn').on('click', function () {
    prevRender(photos, $('#start-count'), $('#end-count'), renderPhotoGallery)
  })
  $('#next-btn_video').on('click', function () {
    nextRender(videos, $('#start-count_videos'), $('#end-count_videos'), renderVideoGallery)
  })
  $('#prev-btn_video').on('click', function () {
    prevRender(videos, $('#start-count_videos'), $('#end-count_videos'), renderVideoGallery)
  })
  $('#gallery-photo').magnificPopup({
    fixedContentPos: false,
    delegate: 'a',
    type: 'image',
    callbacks: {
      elementParse: function (item) {
        if (item.el[0].closest('.video')) {
          item.type = 'iframe',
            item.iframe = {
              patterns: {
                youtube: {
                  index: 'youtube.com/',
                  id: 'v=',
                  src: '//www.youtube.com/embed/%id%?autoplay=1' // 
                },
                vimeo: {
                  index: 'vimeo.com/',
                  id: '/',
                  src: '//player.vimeo.com/video/%id%?autoplay=1'
                },
                gmaps: {
                  index: '//maps.google.',
                  src: '%id%&output=embed'
                }
              }
            }
        } else {
          item.type = 'image',
            item.tLoading = 'Loading image #%curr%...',
            item.mainClass = 'mfp-img-mobile',
            item.image = {
              tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
            }
        }
      }
    },
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    }
  });
  $('#gallery-video').magnificPopup({
    fixedContentPos: false,
    delegate: 'a',
    type: 'image',
    callbacks: {
      elementParse: function (item) {
        if (item.el[0].closest('.video')) {
          item.type = 'iframe',
            item.iframe = {
              patterns: {
                youtube: {
                  index: 'youtube.com/',
                  id: 'v=',
                  src: '//www.youtube.com/embed/%id%?autoplay=1' // 
                },
                vimeo: {
                  index: 'vimeo.com/',
                  id: '/',
                  src: '//player.vimeo.com/video/%id%?autoplay=1'
                },
                gmaps: {
                  index: '//maps.google.',
                  src: '%id%&output=embed'
                }
              }
            }
        } else {
          item.type = 'image',
            item.tLoading = 'Loading image #%curr%...',
            item.mainClass = 'mfp-img-mobile',
            item.image = {
              tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
            }
        }
      }
    },
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    }
  });

});
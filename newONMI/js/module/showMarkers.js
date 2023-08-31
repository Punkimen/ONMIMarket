export const showMarker = (progress, markers) => {
  if (progress > 0 && progress < 1) {
    if (progress >= 0) {
      markers[0].classList.add('show')
      markers[1].classList.add('show')
      // markers[3].classList.add('show')
    } else {
      markers[0].classList.remove('show')
      markers[1].classList.remove('show')
      // markers[3].classList.remove('show')
    }
    if (progress >= 0.38) {
      markers[2].classList.add('show')
    } else {
      markers[2].classList.remove('show')
    }
    if (progress >= 0.39) {
      markers[3].classList.add('show')
    } else {
      markers[3].classList.remove('show')
    }
    if (progress >= 0.45) {
      markers[4].classList.add('show')
    } else {
      markers[4].classList.remove('show')
    }
    if (progress >= 0.58) {
      markers[5].classList.add('show')
    } else {
      markers[5].classList.remove('show')
    }
    if (progress >= 0.70) {
      markers[6].classList.add('show')
    } else {
      markers[6].classList.remove('show')
    }
    if (progress >= 0.77) {
      markers[7].classList.add('show')
    } else {
      markers[7].classList.remove('show')
    }
    if (progress >= 0.90) {
      markers[8].classList.add('show')
    } else {
      markers[8].classList.remove('show')
    }
  }
}

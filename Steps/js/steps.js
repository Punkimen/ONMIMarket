$('.steps__aside .benefits__tabs-elem').off('click')

let stepsCount = 0;

const nextStep = (count) => {
  $('.steps__aside .benefits__tabs-elem').removeClass('active')
  $('.steps__aside .benefits__tabs-elem').eq(count).addClass('active')
  $('.steps__aside .benefits__tabs-elem.active').prev().css({
    "border": "none"
  })
  $('.step-item__status').eq(count).addClass('active')
}

const snapPhoto = (webcam, canvas) => {
  webcam.snap();
  $(canvas).addClass('show')
}

const webcamStartFirst = () => {
  const webcamElement = document.querySelector('#webcam');
  const canvasElement = document.querySelector('#canvas');
  const snap = document.querySelector('#step_2-photo-do')
  const webcam = new Webcam(webcamElement, 'user', canvasElement);
  webcam.start()
    .then(result => {
      console.log("webcam started");
      document.querySelector('#step_2-photo-do').disabled = false;
    })
    .catch(err => {
      console.log(err);
      webcam.start()
    });
  snap.addEventListener('click', function () {
    snapPhoto(webcam, '#canvas')
    webcamStartSecond()
    nextStep(3);
    $('#step_3-photo-do').prop('disabled', false)
  })
};

// step 4
const video = document.querySelector('#webcam_2')
const canvas = document.querySelector('#canvas_2')
const btn = document.querySelector('#step_3-photo-do')

const parts = [];
let mediaRecorder
const btnAnim = (btn, count) => {
  setTimeout(function () {
    btn.textContent = count
    count--
    if (count >= 0) {
      btnAnim(btn, count)
    } else {
      btn.textContent = "Thank you"
      btn.disabled = true
      return false
    }
  }, 1000)
}
const saveVideo = () => {

  let constraintObj = {
    audio: false,
    video: {
      facingMode: "user",
      width: { min: 640, ideal: 1280, max: 1920 },
      height: { min: 480, ideal: 720, max: 1080 }
    }
  };
  if (navigator.mediaDevices === undefined) {
    navigator.mediaDevices = {};
    navigator.mediaDevices.getUserMedia = function (constraintObj) {
      let getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
      if (!getUserMedia) {
        return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
      }
      return new Promise(function (resolve, reject) {
        getUserMedia.call(navigator, constraintObj, resolve, reject);
      });
    }
  } else {
    navigator.mediaDevices.enumerateDevices()
      .then(devices => {
        devices.forEach(device => {
          console.log(device.kind.toUpperCase(), device.label);
          //, device.deviceId
        })
      })
      .catch(err => {
        console.error(err.name, err.message);
      })
  }
  const fetchFile = (url) => {
    fetch(url)
      .then(res => res.blob())
      .then(file => {
        let tempUrl = URL.createObjectURL(file);
        // const aTag = document.createElement('a')
        // aTag.href = tempUrl
        // aTag.innerText = "wzsczx"
        // aTag.download = url.replace(/^.*[\\\/]/, "")
        // document.querySelector('body').appendChild(aTag)
        // aTag.click()

        const videosFiles = document.querySelector('#id_video')
        let container = new DataTransfer();
        let video = new File([file], "video.mp4")
        container.items.add(video);
        videosFiles.files = container.files;
        URL.revokeObjectURL(tempUrl)
        // aTag.remove()
      }).catch((err) => {
        console.log(err);
      })
  }

  navigator.mediaDevices.getUserMedia(constraintObj)
    .then(function (mediaStreamObj) {
      //connect the media stream to the first video element
      let video = document.querySelector('#webcam_2');
      if ("srcObject" in video) {
        video.srcObject = mediaStreamObj;
      } else {
        //old version
        video.src = window.URL.createObjectURL(mediaStreamObj);
      }

      video.onloadedmetadata = function (ev) {
        //show in the video element what is being captured by the webcam
        video.play();
      };

      //add listeners for saving video/audio
      let start = document.querySelector('#step_3-photo-do')
      // const download = document.querySelector('#download-photo')
      let vidSave = document.getElementById('video_1');
      let mediaRecorder = new MediaRecorder(mediaStreamObj);
      let chunks = [];

      start.addEventListener('click', (ev) => {
        btnAnim(document.getElementById('step_3-photo-do'), 3)
        mediaRecorder.start();
        setTimeout(function () {
          mediaRecorder.stop();
          vidSave.style.zIndex = 3
        }, 4000)
      })

      mediaRecorder.ondataavailable = function (ev) {
        chunks.push(ev.data);
      }
      mediaRecorder.onstop = (ev) => {
        let blob = new Blob(chunks, { 'type': 'video/mp4;' });
        chunks = [];
        let videoURL = window.URL.createObjectURL(blob);
        vidSave.src = videoURL;
        fetchFile(videoURL)
      }
    })
    .catch(function (err) {
      console.log(err.name, err.message);
    });

}


document.addEventListener('DOMContentLoaded', () => {
  saveVideo()
  $('#step_3-photo-do').prop('disabled', false)
})

// step 4

$('#step-number').on('input', function () {
  $(this).addClass('valid');
  if ($(this).hasClass('valid')) {
    nextStep(1);
    $('#card-verification__btn').prop('disabled', false);
    // cameraStart('#webcam', '#canvas', '#step_2-photo-do')
  }
})



// card-validate
const inpCardNum = document.querySelector('#card-num')
const inpCardDate = document.querySelector('#card-date')
const inpCardCvv = document.querySelector('#card-cvv')

const setCardLogo = (cardNum) => {

  const arr = cardNum.split('')
  if (arr[0] == 4) {
    $('.plastic-card__logo img').hide()
    $('.plastic-card__logo_visa').show()
  } else if (arr[0] == 5) {
    $('.plastic-card__logo img').hide()
    $('.plastic-card__logo_mastercard').show()
  }
  console.log(arr[0]);
}

const cardVer = (formSelector) => {
  const form = document.querySelector(formSelector)
  const formData = new FormData(form)
  const arrayForm = Array.from(formData).map((el, index) => {
    if (index === 0) {
      const arr = el[1].replace(/\s/g, '').split('')
      const newArray = arr.map((el, index) => {
        return arr.length - 4 > index ? null : el
      })
      return newArray.join('');
    } else {
      return el[1]
    }
  })
  console.log(arrayForm[0], arrayForm[1], arrayForm[2]);

  $('.plastic-card__num').text(`**** **** **** ${arrayForm[0]}`)
  $('.plastic-card__name').text(`${arrayForm[1]}`)
  $('.plastic-card__date').text(`${arrayForm[2]}`)

}
$('#edit-card').on('click', e => { cardVer('#card-ver_form') })

$('#card-verification__btn').on('click', function (e) {
  e.preventDefault()
  cardVer('#card-ver_form')
  $('.plastic-card').addClass('filed')
  $('#edit-card').css('display', 'block')
  $('#card-verification__btn').hide()
  nextStep(2);
  $('#step_2-photo-do').prop('disabled', false)
  webcamStartFirst()

})


const maxLength = (value, maxLength) => {
  if (value.length > maxLength) {
    return value.slice(0, maxLength)
  } else {
    return value
  }
}

const addWhitespace = (val, inp) => {
  let str = val.split('')
  if (str.join('').replace(/\s/g, '').split('').length % 4 === 0) {
    str.push(' ')
  }

  inp.value = str.join('')
}

const addSlash = (val, inp) => {
  let str = val.split('')
  if (str.length === 2) {
    str.push('/')
  }

  inp.value = str.join('')
}



inpCardNum.addEventListener('input', e => {
  const val = e.target.value
  addWhitespace(maxLength(val, 20), e.target);
  setCardLogo(val)
})

inpCardDate.addEventListener('input', e => {
  const val = e.target.value
  addSlash(maxLength(val, 5), e.target);
})
inpCardCvv.addEventListener('input', e => {
  e.target.value = maxLength(e.target.value, 3)

})
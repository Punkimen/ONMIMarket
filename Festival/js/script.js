// running str
const runningStr = () => {
    const callWrapper = document.querySelector('.call__wrapper')
    let count = 10
    for (let i = 0; i < count; i++) {
        const callItem = document.createElement('div');
        callItem.classList.add('call__item')
        callItem.innerHTML = `
        <div class="call__icon">
            <span>!</span>
        </div>
        <div class="call__text">Call for entries</div>
        `
        callWrapper.appendChild(callItem)
    }
}
runningStr();
let count = 0;
// popup
; (function () {
    const meetImg = document.querySelector('.meet__volunt')
    document.body.addEventListener('click', (e) => {
        e.preventDefault()
        const welcomeLink = e.target.closest('.welcome__link')
        const popupFind = e.target.closest('.welcome-popup__find')
        const welcomeElem = e.target.closest('.welcome-menu__elem')
        const welcomeElemLink = e.target.closest('.welcome-menu__link--width-img')
        const welcomeImg = e.target.closest('.welcome-menu__img')
        const loversLink = e.target.closest('.hearts')
        const popupContainer = e.target.closest('.lovers-popup')
        const closePopup = e.target.closest('.popup-close')
        const aboutLink = e.target.closest('#about-link')
        const snapImg = e.target.closest('.snap__photo-1')
        const snapClose = e.target.closest('.snap__close')
        const awardsLink = e.target.closest('#awards-link')
        const meetSection = document.querySelector('.meet')
        const meetElem = e.target.closest('.meet__elem')
        const meetElemVolunt = e.target.closest('.meet__elem--volunt')
        const annualDateLink = e.target.closest('.annual__date-link')
        const meetElemBlock = e.target.closest('.meet__elem-block')
        const footerBtn = e.target.closest('#footer__arrow ')
        // const orderBtn = e.target.closest('.broduct__btn')

        if (welcomeLink) {
            document.body.classList.add('overlay')
            let popupId = welcomeLink.dataset.popup
            const welcomePopup = document.querySelector(popupId)
            welcomePopup.classList.add('active')
        }
        if (popupFind) {
            document.body.classList.remove('overlay')
            e.target.closest('.popup').classList.remove('active')
        }

        if (welcomeElem) {
            document.querySelectorAll('.welcome-menu__img').forEach(el => {
                el.classList.remove('active')
            })
            welcomeElem.querySelector('.welcome-menu__img').classList.add('active')
        }
        if (welcomeElemLink) {
            document.querySelectorAll('.welcome-menu__img').forEach(el => {
                el.classList.remove('active')
            })
        }
        if (welcomeImg) {
            document.querySelectorAll('.welcome-menu__img').forEach(el => {
                el.classList.remove('active')
            })
        }
        if (welcomeElemLink) {
            document.querySelectorAll('.welcome-menu__img').forEach(el => {
                el.classList.remove('active')
            })
        }
        if (meetElem) {
            document.querySelectorAll('.meet__elem').forEach(el => {
                el.classList.remove('active')
            })
            meetElem.classList.add('active')
            document.querySelectorAll('.meet__elem-block').forEach(el => {
                el.classList.remove('active')
            })
            meetElem.querySelector('.meet__elem-block').classList.add('active')
        }
        if (meetElemBlock) {
            document.querySelectorAll('.meet__elem-block').forEach(el => {
                el.classList.remove('active')
            })
        }
        if (meetElemVolunt) {
            count++
            switch (count) {
                case 0:
                    meetSection.style.background = '#fff'
                    console.log('1');
                    meetImg.classList.remove('active')
                    document.body.classList.remove('overlay')
                case 1:
                    document.body.classList.add('overlay')
                    meetImg.classList.add('active')
                    meetImg.style.background = 'url(../img/volunt-1.jpg)'
                    meetImg.style.backgroundRepeat = 'no-repeat'
                    meetImg.style.backgroundSize = 'cover'
                    break;
                case 2:
                    document.body.classList.add('overlay')
                    meetImg.classList.add('active')
                    meetImg.style.background = 'url(../img/volunt-2.jpg)'
                    meetImg.style.backgroundRepeat = 'no-repeat'
                    meetImg.style.backgroundSize = 'cover'
                    break;
                case 3:
                    meetImg.classList.remove('active')
                    document.body.classList.remove('overlay')
                    meetSection.style.background = '#fff';
                    count = 0;
                    break;
            }
        }
        if (loversLink) {
            document.body.classList.add('overlay')
            let popupId = '#lovers-popup'
            const aboutPopup = document.querySelector(popupId)
            aboutPopup.classList.add('active')
        }
        if (aboutLink) {
            document.body.classList.add('overlay')
            let popupId = aboutLink.dataset.popup
            const aboutPopup = document.querySelector(popupId)
            aboutPopup.classList.add('active')
        }
        if (awardsLink) {
            document.body.classList.add('overlay')
            let popupId = awardsLink.dataset.popup
            const awardsPopyp = document.querySelector(popupId)
            awardsPopyp.classList.add('active')
        }
        if (popupContainer) {
            document.body.classList.remove('overlay')
            e.target.closest('.popup').classList.remove('active')
        }
        if (closePopup) {
            document.body.classList.remove('overlay')
            e.target.closest('.popup').classList.remove('active')
        }
        if (snapImg) {
            const snapimg2 = document.querySelector('.snap__photo-2')
            snapimg2.classList.add('active')
        }
        if (snapClose) {
            const snapimg2 = document.querySelector('.snap__photo-2')
            snapimg2.classList.remove('active')
        }

        if (annualDateLink) {
            let annualDate = document.querySelector('.annual__date')
            annualDate.classList.toggle('active')
        }
        if (footerBtn) {
            document.body.classList.add('overlay')
            let popupId = footerBtn.dataset.popup
            const footerPopup = document.querySelector(popupId)
            footerPopup.classList.add('active')

        }

    })
    document.body.addEventListener('keydown', (e) => {
        if (e.key == 'Escape') {
            let allPopup = document.querySelectorAll('.popup')
            document.body.classList.remove('overlay')
            allPopup.forEach(e => {
                if (e.classList.contains('active')) {
                    e.classList.remove('active')
                }
            })
            document.querySelectorAll('.welcome-menu__img').forEach(el => {
                el.classList.remove('active')
            })
            document.querySelectorAll('.meet__elem').forEach(el => {
                el.classList.remove('active')
            })
            document.querySelectorAll('.meet__elem-block').forEach(el => {
                el.classList.remove('active')
            })
        }
    })
})();
// popup end

// slider
const swiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
});
const swiper_2 = new Swiper('.annual__photos', {
    slidesPerView: 1,
    breakpoints: {
        992: {
            slidesPerView: 1,
            speed: 400,
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 30,
        }
    }
});

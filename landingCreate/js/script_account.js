if (document.documentElement.clientWidth <= 1024) {
    document.querySelector('.menu').addEventListener('touchstart', function (event) {
        event.preventDefault();
        document.querySelector('.header-mobile').classList.toggle('active-header-mobile');
        if (this.getAttribute('src') == 'svg/menu.svg') {
            this.setAttribute('src', 'svg/close.svg')
        }
        else {
            this.setAttribute('src', 'svg/menu.svg')
        }
    })
    document.querySelector('.header-prefooter').removeChild(document.querySelector('.header-prefooter > br'));
}
else {
    document.querySelector('.menu').addEventListener('click', function () {
        document.querySelector('.header-mobile').classList.toggle('active-header-mobile');
        if (this.getAttribute('src') == 'svg/menu.svg') {
            this.setAttribute('src', 'svg/close.svg')
        }
        else {
            this.setAttribute('src', 'svg/menu.svg')
        }
    })
}
let lang = document.querySelector('.lang');
let activeLang = document.querySelector('.active-lang');
activeLang.addEventListener('click', function () {
    lang.classList.add('active-langs');
});
let temp;
lang.addEventListener('mouseleave', function () {
    this.classList.remove('active-langs');
})
document.querySelectorAll('.lang > span:not(:first-child)').forEach(elem => {
    elem.addEventListener('click', function () {
        temp = activeLang.textContent;
        activeLang.textContent = elem.textContent;
        elem.textContent = temp;
        lang.classList.remove('active-langs');
    });
});
document.querySelector('.lang > svg').addEventListener('click', function () {
    lang.classList.remove('active-langs');
})

document.querySelectorAll('.modal > svg').forEach(elem => {
    elem.addEventListener('click', function () {
        this.parentElement.parentElement.style.display = 'none';
    })
})


document.querySelector('.send-code').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('.description-modal').textContent = 'Введите код полученный в смс';
    document.querySelector('.modal > input').setAttribute('placeholder', 'Введите код');
    innerTime();
    document.querySelector('.error-send').style.display = 'flex';
});
let timer = document.querySelector('.inner-time');
let time = 60;
function innerTime() {
    if (time == 0) {
        timer.textContent = '00';
    }
    else {
        setTimeout(() => {
            timer.textContent = time;
            time--;
            innerTime();
        }, 1000);
    }
}
document.querySelectorAll('nav > a:last-child, .mobil-nav > a, .mob-status').forEach(elem => {
    elem.addEventListener('click', function () {
        event.preventDefault();
        document.querySelector('.modal-status').style.display = 'flex';
    });
});

let contractName = $('.credits__table-row');
let contractInfo = $('.credits__table-info');

contractName.on('click', function () {
    if ($(this).parent().hasClass('active')) {
        $(this).parent().removeClass('active');
        $(this).next().slideUp();
    } else {
        $(this).parent().addClass('active').siblings().removeClass('active');
        contractInfo.slideUp();
        $(this).next().slideDown();
    }
})

let accountTab = $('.account__head-item');
let accountContent = $('.account__content-item')

accountTab.on('click', function () {
    let index = $(this).index();
    console.log(index)
    $(this).addClass('active').siblings().removeClass('active');
    accountContent.eq(index).addClass('visible').siblings().removeClass('visible');
})
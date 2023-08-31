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

document.querySelector('.application').addEventListener('click', function () {
    event.preventDefault();
    document.querySelector('.modal-application').style.display = 'flex';
})
document.querySelectorAll('.message').forEach(elem => {
    elem.addEventListener('click', function () {
        event.preventDefault();
        document.querySelector('.modal-message').style.display = 'flex';
    })
})


Date.prototype.getDaysInMonth = function (mouth) {
    return (new Date(this.getFullYear(), this.getMonth() + mouth, 0)).getDate();
};
let date = new Date();

let mounths = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

let nums = document.querySelectorAll('.row-data');
let dayOutput = document.querySelector('.day-pay');
let yearOutput = document.querySelector('.year-pay');
let mouthOutput = document.querySelector('.mouth-pay');
let thisShowMouth = 0;
let hardMouth = 0;
let hardYear = 1;
function getFirstDayMouth(mouth) {
    return new Date(date.getFullYear(), date.getMonth() + mouth, 6).getDay();
}

function updateMouth(showMouth) {
    let numDay = 0;
    let nextMouth = 0;
    let mouth = date.getMonth() + showMouth;
    let allDays = date.getDaysInMonth(showMouth + 1);
    let allDaysPrevMouth = date.getDaysInMonth(showMouth);
    let firstMouthDay = getFirstDayMouth(showMouth);
    let prevMouth = allDaysPrevMouth - firstMouthDay - 1;
    for (let i = 0; i < nums.length; i++) {
        if (i <= firstMouthDay) {
            nums[i].style.color = '#959393';
            prevMouth += 1;
            nums[i].innerHTML = prevMouth;
            nums[i].addEventListener('click', oldMouth);
        }
        else if (i > firstMouthDay && i <= allDays + firstMouthDay) {
            numDay += 1;
            nums[i].innerHTML = numDay;
            nums[i].addEventListener('click', function () {
                let active = document.querySelector('.active');
                if (active != null) {
                    active.classList.remove('active');
                    active.style.color = '#2F2F2F';
                }
                dayOutput.textContent = this.textContent;
                this.classList.toggle('active');
                this.style.color = '#ffffff';
            })
            nums[i].style.color = '#2F2F2F';
            nums[i].removeEventListener('click', oldMouth);
            nums[i].removeEventListener('click', newMouth);
        }
        else if (i > allDays + firstMouthDay) {
            nextMouth += 1;
            nums[i].innerHTML = nextMouth;
            nums[i].style.color = '#959393';
            nums[i].addEventListener('click', newMouth);
        }
    }
    if (hardMouth > 11) {
        hardMouth = 0;
        mouthOutput.textContent = mounths[hardMouth];
        hardYear++;
        yearOutput.textContent = date.getFullYear() + hardYear;
    }
    else if (mouth > 11) {
        mouthOutput.textContent = mounths[hardMouth];
        hardMouth++;
        yearOutput.textContent = date.getFullYear() + hardYear;
    }
    else if (mouth > 11 && hardMouth < 11) {
        hardMouth++;
        mouthOutput.textContent = mounths[hardMouth];
    }
    else {
        mouthOutput.textContent = mounths[mouth];
        yearOutput.textContent = date.getFullYear();
    }
}
updateMouth(thisShowMouth);
function oldMouth() {
    thisShowMouth -= 1;
    updateMouth(thisShowMouth)
}

function newMouth() {
    thisShowMouth += 1;
    updateMouth(thisShowMouth)
}



document.querySelector('.days').addEventListener('click', function () {
    document.querySelector('.' + this.parentElement.getAttribute('class') + '+div').style.display = 'none';
    document.querySelector('.wrap-calendar').style.display = 'flex';
});
document.querySelectorAll('.no-days').forEach(elem => {
    elem.addEventListener('click', function () {
        document.querySelector('.' + this.parentElement.getAttribute('class') + '+div').style.display = 'flex';
        document.querySelector('.wrap-calendar').style.display = 'none';
    });
})

function decimalAdjust(type, value, exp) {
    if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value);
    }
    value = +value;
    exp = +exp;
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
    }
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}





let startBar = 0;
let circle = false;
let activeBar;
let onePercentBar = (document.querySelector('.bar').offsetWidth - 22) / 100;
let onePercentSum = 500;
let onePercentTerm = 0.36;
let outputSum = document.querySelector('.sum-credit');
let outputTerm = document.querySelector('.term-credit');
let resultCalculate = document.querySelector('.res-char > span');
let allResult = document.querySelector('.result > .result-char:nth-child(3) > .res-char > span');
console.log(allResult);
let activeOutput;
let activePercent;
let coordinate;
Math.round10 = function (value, exp) {
    return decimalAdjust('round', value, exp);
};
['mousemove', 'touchmove'].forEach(event => {
    document.querySelector('.credit-calc').addEventListener(event, function (event) {
        // event.preventDefault();
        if (event.clientX == undefined) {
            coordinate = event.changedTouches[0].clientX;
        }
        else {
            coordinate = event.clientX;
        }
        if (circle == true) {
            if (startBar == 0) {
                startBar = event.clientX;
            }
            else if (startBar == undefined) {
                startBar = event.changedTouches[0].clientX;
            }
            let countOutput = Math.round(activeBar.clientWidth / onePercentBar * activePercent);
            if (countOutput < 1000 && activePercent == onePercentSum) {
                countOutput = 1000;
            }
            else if (countOutput > 50000 && activePercent == onePercentSum) {
                countOutput = 50000;
            }
            else if (countOutput < 1) {
                countOutput = 1;
            }
            let returnResultAll = Math.round10((+outputSum.textContent) / (+outputTerm.textContent), -2)
            resultCalculate.textContent = returnResultAll;
            allResult.textContent = Math.round10(returnResultAll + 200, -2);
            activeOutput.textContent = countOutput;
            activeBar.style.width = 'calc(30% - ' + (startBar - coordinate) + 'px)';
        }
    })
})
document.querySelectorAll('.circle-bar').forEach(elem => {
    elem.addEventListener('mousedown', function () {
        circle = true;
        activeBar = this.parentElement.querySelector('.active-bar');
        if (this.classList.contains('one-circle')) {
            activeOutput = outputSum;
            activePercent = onePercentSum;
        }
        else {
            activeOutput = outputTerm;
            activePercent = onePercentTerm;
        }
    })
    elem.addEventListener('touchstart', function (event) {
        event.preventDefault();
        circle = true;
        activeBar = this.parentElement.querySelector('.active-bar');
        if (this.classList.contains('one-circle')) {
            activeOutput = outputSum;
            activePercent = onePercentSum;
        }
        else {
            activeOutput = outputTerm;
            activePercent = onePercentTerm;
        }
    })
})
document.querySelector('.credit-calc').addEventListener('mouseleave', function () {
    circle = false;
})
document.querySelector('.credit-calc').addEventListener('mouseup', function () {
    circle = false;
})
document.querySelector('.credit-calc').addEventListener('touchend', function () {
    circle = false;
})
document.querySelectorAll('.header-about').forEach(elem => {
    elem.addEventListener('touchend', function () {
        this.parentElement.classList.toggle('active-list-about');
    })
})
document.querySelectorAll('.item-question').forEach(elem => {
    elem.addEventListener('touchend', function () {
        document.querySelectorAll('.active-item-question').forEach(elem => {
            elem.classList.remove('active-item-question');
        });
        this.classList.add('active-item-question');
    })
});






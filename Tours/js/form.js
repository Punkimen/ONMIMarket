(function () {

  const setValue = () => {
    const nightCount = $('#nights-count').text()
    const adultCount = $('#adult-count').text()
    const childCount = $('#child-count').text()
    $('#nights').val(nightCount)
    $('#persons').val(`Взрослых ${adultCount} / детей ${childCount}`)
  }

  $('.plus-btn').on('click', function () {
    let countVal = parseInt($(this).parent().find('.custom-select__handle-val').text())
    countVal++
    if (countVal > 0) {
      $(this).parents('.custom-select').addClass('filed');
      $(this).parents('.custom-select').removeClass('error')
    }
    $(this).parent().find('.custom-select__handle-val').text(countVal)
    setValue()
  })
  $('.minus-btn').on('click', function () {
    let countVal = parseInt($(this).parent().find('.custom-select__handle-val').text())
    if (countVal > 0) {
      $(this).parents('.custom-select').addClass('filed')
      $(this).parents('.custom-select').removeClass('error')
      countVal--
    }
    $(this).parent().find('.custom-select__handle-val').text(countVal)
    setValue()
  })
})();


(function () {
  const selectsPosition = () => {
    const allFileds = document.querySelectorAll('.find-tour__select');
    const windowWidth = $(window).width();
    if (windowWidth <= 992) {
      allFileds.forEach((el, index) => {
        el.style.order = index;
        $('.find-tour__row_top').append(el)
        $('.find-tour__checkbox').after($('.find-tour__btn'))
      })
    } else {
      allFileds.forEach((el, index) => {
        if (index > 4) {
          el.style.order = 0;
          $('.find-tour__row_bottom').append(el)
          $('.find-tour__row_bottom').append($('.find-tour__btn'))
        }
      })
    }
  }
  selectsPosition()
  $(window).on('resize', function () {
    selectsPosition()
  })
})();

// calendar
(function () {

  const Calendar = function () {
    this.months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    this.DaysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    let date = new Date();
    this.nowYear = date.getFullYear()
    this.nowMonth = date.getMonth();
    this.nowDay = date.getDate()
    this.countYear = 10;
  }

  Calendar.prototype.renderSelectMonth = function () {
    let monthInner = document.querySelector('#months .custom-select__body');
    let monthNow = document.querySelector('#months .custom-select__val')
    monthNow.innerText = this.months[this.nowMonth]
    this.months.forEach((el, index) => {
      let option = document.createElement('div')
      option.className = 'custom-select__item'
      option.value = el
      option.innerHTML = `
      <span class="custom-select__choose">
        ${el}
      </span>
      <input class="custom-select__radio" data-index="${index}" value="${el}" name="month" type="radio">
      `
      monthInner.append(option)
    })
  }


  Calendar.prototype.renderSelectYear = function () {
    let yearInner = document.querySelector('#year .custom-select__body');
    let yearNow = document.querySelector('#year .custom-select__val')
    yearNow.innerText = this.nowYear
    let arrYears = [];
    for (let i = this.nowYear; i <= this.nowYear + this.countYear; i++) {
      arrYears.push(i);
    }
    arrYears.forEach((el, index) => {
      let option = document.createElement('div')
      option.className = 'custom-select__item'
      option.value = el
      option.innerHTML = `
      <span class="custom-select__choose">
        ${el}
      </span>
      <input class="custom-select__radio" value="${el}" name="month" type="radio">
      `
      yearInner.append(option)
    })
  }

  Calendar.prototype.showcurr = function () {
    this.showMonth(this.nowYear, this.nowMonth);
  };

  // write days
  Calendar.prototype.showMonth = function (y, m) {
    let d = new Date()
    let firstDayOfMonth = new Date(y, m, 1).getDay()
    let lastDateOfMonth = new Date(y, m + 1, 0).getDate()
    let lastDayOfLastMonth = m == 0 ? new Date(y - 1, 11, 0).getDate() : new Date(y, m, 0).getDate();

    let html = '<table>';

    let i = 1;
    do {

      let dow = new Date(y, m, i).getDay();

      if (dow == 0) {

      }

      else if (i == 1) {

        let k = lastDayOfLastMonth - firstDayOfMonth + 1;
        for (let j = 0; j < firstDayOfMonth; j++) {
          html += '<div class="calendar__days-item not-current">' + k + '</div>';
          k++;
        }
      }

      let chk = new Date();
      let chkY = chk.getFullYear();
      let chkM = chk.getMonth();
      if (chkY == this.currYear && chkM == this.currMonth && i == this.currDay) {
        html += '<div class="calendar__days-item today">' + i + '</div>';
      } else {
        html += '<div class="calendar__days-item normal">' + i + '</div>';
      }
      if (dow == 6) {
      }

      else if (i == lastDateOfMonth) {
        let k = 1;
        for (dow; dow < 6; dow++) {
          html += '<div class="not-current calendar__days-item">' + k + '</div>';
          k++;
        }
      }

      i++;
    } while (i <= lastDateOfMonth);
    document.querySelector('.calendar__days').innerHTML = html;
  }
  Calendar.prototype.getDateVal = function (d, m, y) {
    const input = document.querySelector('#calendar-date')

    d = d < 10 ? '0' + d : d;
    m = m < 10 ? '0' + m : m;
    $('#calendar-date').val(`${d}.${m}.${y}`)
    // $('#calendar-date').val(`${d}.${m}.${y}`)

  }


  // Start calendar
  let calendar = new Calendar();

  calendar.renderSelectMonth()
  calendar.renderSelectYear()
  calendar.showcurr();

  $('#months .custom-select__radio').on('change', function () {
    let month = +$(this).attr('data-index')
    calendar.nowMonth = month
    calendar.showMonth(calendar.nowYear, calendar.nowMonth)
  })
  $('#year .custom-select__radio').on('change', function () {
    let year = +$(this).val()
    calendar.nowYear = year
    calendar.showMonth(calendar.nowYear, calendar.nowMonth)
  })

  document.querySelector('.calendar__days').addEventListener('click', function (e) {
    if (e.target.classList.contains('normal')) {
      let day = e.target.innerText

      calendar.nowDay = day
      calendar.getDateVal(calendar.nowDay, calendar.nowMonth, calendar.nowYear);
      $('.input-date__calendar').slideUp()
      $('.input-date').addClass('filed')
      $('.input-date').removeClass('error')
    }

  })
  $('#calendar-date').on('click', function () {
    $('.input-date__calendar').slideToggle()
  })
})();

function scrollInit() {
  $('.custom-select__body').mCustomScrollbar({
    axis: "y",
  });
}

scrollInit()
import {addClass, removeClass} from "./handleClassnames.js"

export const stepAdaptive = (windowWidth) => {

  const stepsWrapper = document.querySelector('.step__wrapper')
  const stepTitle = document.querySelector('.step__title')
  const stepText = document.querySelector('.step__text')
  if (stepsWrapper && stepTitle && stepText) {
    if (windowWidth <= (768) && !stepsWrapper?.classList.contains('changed')) {
      addClass(stepsWrapper, 'changed')
      stepsWrapper.append(stepText)
    } else if (windowWidth > (768) && stepsWrapper?.classList.contains('changed')) {
      removeClass(stepsWrapper, 'changed')
      stepTitle.after(stepText)
    }
  }
}

export const circlesAdaptive = (windowWidth) => {
  const cirles = document.querySelector('.be-part__cirles')
  const singleCircle = document.querySelector('.circle_1')
  const circlesWrapper = document.querySelector('.circles__wrapper')
  const indItem = document.querySelector('.individual-chose__item_ind')
  const collItem = document.querySelector('.individual-chose__item_coll')
  if (cirles) {
    if (windowWidth <= (768) && !cirles.classList.contains('changed')) {
      addClass(cirles, 'changed')
      indItem.prepend(singleCircle)
      collItem.prepend(circlesWrapper)
    } else if (windowWidth > (768) && cirles.classList.contains('changed')) {
      removeClass(cirles, 'changed')
      cirles.prepend(singleCircle)
      cirles.append(collItem)
    }
  }
}

export const cardsAdaptive = (windowWidth) => {
  const cardsWrapper = document.querySelector('.cards .cards__wrapper')
  const card1 = cardsWrapper?.querySelector('.card_1')
  const card3 = cardsWrapper?.querySelector('.card_3')
  const card4 = cardsWrapper?.querySelector('.card_4')
  const card2 = cardsWrapper?.querySelector('.card_2')
  const cardsColumns = cardsWrapper?.querySelectorAll('.cards__col')
  if (windowWidth <= (768) && !cardsWrapper.classList.contains('wrapper-row')) {
    removeClass(cardsWrapper, 'wrapper-row')
    cardsWrapper.append(card1)
    cardsWrapper.append(card4)
    cardsWrapper.append(card2)
    cardsWrapper.append(card3)
  } else {
    addClass(cardsWrapper, 'wrapper-row')
    cardsColumns.forEach((el, index) => {
      if (index === 0) {
        cardsColumns[index].append(card1, card2)
      }
      if (index === 1) {
        cardsColumns[index].append(card4, card3)
      }
    })
  }
}

export const journeyCardsAdaptive = (windowWidth) => {
  const cardsWrapper = document.querySelector('.journey-cards .journey-cards__wrapper')
  const card1 = cardsWrapper?.querySelector('.journey-card_1')
  const card2 = cardsWrapper?.querySelector('.journey-card_2')
  const card3 = cardsWrapper?.querySelector('.journey-card_3')
  const card4 = cardsWrapper?.querySelector('.journey-card_4')
  const cardsColumns = cardsWrapper?.querySelectorAll('.cards__col')
  if (windowWidth <= (768) && !cardsWrapper.classList.contains('wrapper-row')) {
    removeClass(cardsWrapper, 'wrapper-row')
    cardsWrapper.append(card1)
    cardsWrapper.append(card2)
    cardsWrapper.append(card3)
    cardsWrapper.append(card4)
  } else {
    addClass(cardsWrapper, 'wrapper-row')
    cardsColumns.forEach((el, index) => {
      if (index === 0) {
        cardsColumns[index].append(card1, card3)
      }
      if (index === 1) {
        cardsColumns[index].append(card2, card4)
      }
    })
  }
}

export const formAdaptive = (windowWidth) => {
  const form = document.querySelector('#be-part__form')
  const formField = form.querySelector('.form__field')
  const formBtn = form.querySelector('.form__btn')
  const formText = form.querySelector('.form__text')
  if (windowWidth <= (568) && !formField.classList.contains('adaptive')) {
    addClass(formField, 'adaptive')
    formText.after(formBtn)
  } else if ((windowWidth > (568) && formField.classList.contains('adaptive'))) {
    removeClass(formField, 'adaptive')
    formField.append(formBtn)
  }

}

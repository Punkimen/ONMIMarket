import {
  drawSvgLine,
  readText,
  horizontalTransform,
  scalingFoo,
  verticalTransform,
} from "./module/GSAPAnim.min.js";
import {splitText} from "./module/splitText.min.js";

const maskSvg = document.querySelector('.mask')
const markers = document.querySelectorAll('.each-point__mark')
const readedText = document.querySelectorAll('.readed-text')
const cardsAura = document.querySelector('.card_1 .card__front-aura img')
const cardsNft = document.querySelector('.card_3 .card__front-img')
const OMICircles = document.querySelector('.omies__circles')
const OMICircle1 = document.querySelector('.omies__circle_1')
const OMICircle3 = document.querySelector('.omies__circle_3')
const phoneScreens = document.querySelector('.reality__screens')
const phone_1 = document.querySelector('.reality__screen_1')
const phone_3 = document.querySelector('.reality__screen_3')
const cardsPhone = document.querySelector('.card_2 .card__front-img')
const cardsMap = document.querySelector('.card__front-img_bg')
const journeyCardPhone = document.querySelector('.journey-card__phone')
const journeyCardOmi = document.querySelector('.journey-card_2 .journey-card__omi')
const journeyCardMap = document.querySelector('.journey-card_4 .card__front-img_bg')
const heroPose = document.querySelector('.hero__pose')
const findPhone = document.querySelector('.find-map__phone')
const hungerPose = document.querySelector('.hunger-games__pose ')
const culturePose = document.querySelector('.culture__pose ')

ScrollTrigger.refresh()
setTimeout(() => {
  ScrollTrigger.refresh()
}, 100)
maskSvg && drawSvgLine(maskSvg, '.each-point__route', markers)
readedText.forEach(el => {
  splitText(el)
  const words = el.querySelectorAll('.word')
  readText(words, el)
})
horizontalTransform(OMICircle1, OMICircles, '100%', '33%')
horizontalTransform(OMICircle3, OMICircles, '-100%', '-43%')
horizontalTransform(cardsNft, cardsNft, "-5%", "5%", true, null, 'top+=50% bottom', 'bottom top-=50%')
horizontalTransform(phone_1, phoneScreens, '17.5vw', '0', true, null, 'top bottom', 'top+=25% center')
horizontalTransform(phone_3, phoneScreens, '-17.5vw', "0", true, null, 'top bottom', 'top+=25% center')
scalingFoo(cardsAura, cardsAura, 1, 2, "top bottom+=25%", "center top", true)
verticalTransform(cardsPhone, cardsPhone, '-5%', '5%', true)
verticalTransform(findPhone, findPhone, '-5%', '5%', true)
verticalTransform(hungerPose, hungerPose, '-5%', '5%', true)
verticalTransform(culturePose, culturePose, '-5%', '5%', true)
verticalTransform(cardsMap, cardsMap, '-5%', '5%', true)
verticalTransform(journeyCardPhone, journeyCardPhone, '5%', '-10%', true)
verticalTransform(journeyCardOmi, journeyCardOmi, '-5%', '5%', true)
verticalTransform(journeyCardMap, journeyCardMap, '-5%', '5%', true)
verticalTransform(heroPose, heroPose, '-15%', '0%', true, 'bottom center+=35%', "bottom top")


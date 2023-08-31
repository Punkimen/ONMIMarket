export const sectionHeightInit = () => { };
const sectionTop = document.querySelector(".hero");
const sectionBottom = document.querySelector(".adventure");
const bg = document.querySelector(".description-reality");
let heightSection = sectionTop.clientHeight;
const heightBg = bg.clientHeight;

heightSection = heightSection < 300 ? 300 : sectionTop.clientHeight
bg.style.paddingTop = `${heightSection / 4}px`;
// bg.style.paddingBottom = `${heightBg / 4}px`;
bg.style.marginTop = `-${heightSection / 1.5}px`;
sectionBottom.style.marginTop = `-${heightBg / 10}px`;

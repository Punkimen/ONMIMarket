export const sectionHeightInit = (windowWidth) => {
  const sectionTop = document.querySelector(".hero");
  // const sectionBottom = document.querySelector(".adventure");
  const bg = document.querySelector(".description-reality");
  let heightSection = sectionTop.clientHeight;
  // const heightBg = bg.clientHeight;
  let paddingTop = 0
  let marginTop = 0
  if (windowWidth > (768 ) && windowWidth < (990 )) {
    paddingTop = `${heightSection / 3.5}px`
    marginTop = `-${heightSection / 0.9}px`
  } else if (windowWidth > (990 )) {
    paddingTop = `${heightSection / 3.8}px`
    marginTop = `-${heightSection / 0.9}px`
  } else {

    paddingTop = `${heightSection / 4}px`
    marginTop = `-${heightSection / 1.2}px`
  }

  // bg.style.paddingTop = windowWidth > 768 ? `${heightSection / 3.5}px` : `${heightSection / 4}px`;
  bg.style.paddingTop = paddingTop;
// bg.style.paddingBottom = `${heightBg / 4}px`;
//     bg.style.marginTop = windowWidth > 768 ? `-${heightSection / 0.9}px` : `-${heightSection / 1.5}px`;
  bg.style.marginTop = marginTop;
// sectionBottom.style.marginTop = `-${heightBg / 10}px`;
};


export const setHeader = (isHide = false) => {
    const header = document.querySelector(".header");
    if (isHide) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }
};

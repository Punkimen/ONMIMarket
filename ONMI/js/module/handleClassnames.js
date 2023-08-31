export const addClass = (el, className) => {
    el.classList.add(className)
}
export const removeClass = (el, className) => {
    el.classList.remove(className)
}
export const toggleClass = (el, className) => {
    el.classList.contains(className) ? el.classList.remove(className) : el.classList.add(className)
}

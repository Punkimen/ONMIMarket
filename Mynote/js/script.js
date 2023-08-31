"use strict";

const defaultData = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'presale',
        title: 'Presale',
    },
    {
        id: 'tokenomics',
        title: 'Tokenomics',
    },
    {
        id: 'social',
        title: 'Social',
    },
    {
        id: 'roadmap',
        title: 'Roadmap',
    },
    {
        id: 'partners',
        title: 'Partners',
    },
]

const shortcuts = document.querySelectorAll('.shortcut');
const footer = document.querySelector('.footer');
const modals = document.querySelector('.modals');
const createBookmark = (name) => {
    const el = document.querySelector(`[bookmark-id='${name.toLowerCase()}']`)
    if (el) return
    const div = document.createElement('div')
    div.className = 'bookmark show'
    div.setAttribute('bookmark-id', name.toLowerCase())
    div.innerHTML = `  <div class="bookmark__icon" data-id="${name}">
            <img src="img/window_icon.svg" alt="icon">
        </div>
        <div class="bookmark__text">
            <span class="shortcut-name">${name}</span> - Notepad
        </div>`
    footer.appendChild(div)

    bookmarksClick()
}
const createWindow = (shortcut) => {
    const el = document.querySelector(`#${shortcut.id}`)
    const textContent = document.querySelector(`[text-id='${shortcut.id}']`)
    if (el) return

    const div = document.createElement('div')
    div.className = 'window show'
    div.setAttribute('id', shortcut.id)

    div.innerHTML = ` <div class="window__wrapper">
            <div class="window__header">
                <div class="window__label">
                    <div class="window__icon">
                        <img src="img/window_icon.svg" alt="">
                    </div>
                    <div class="window__text"><span class="shortcut-name">${shortcut.title}</span> - Notepad</div>
                </div>
                <div class="window__btns">
                  <button class="window__hide btn">
                    <svg class="">
                      <use xlink:href="./img/icons/icons.svg#hide"></use>
                    </svg>
                  </button>
                    <button class="window__close btn">
                        <svg class="">
                            <use xlink:href="./img/icons/icons.svg#close"></use>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="window__body">
            </div>
        </div>`
    modals.appendChild(div)
    const textWrapper = document.getElementById(shortcut.id).querySelector('.window__body')
    textWrapper.prepend(textContent)
    btnsClick()
}
const deleteElem = (selector) => {
    const el = document.querySelector(selector);
    el && el.remove()
}
shortcuts.forEach(el => {
    el.addEventListener('click', e => {
        const id = e.target.closest('.shortcut').getAttribute('data-id');
        const openShortcut = defaultData.filter(el => el.id === id)
        createWindow(openShortcut[0])
        createBookmark(openShortcut[0].title)
    })
})

const btnsClick = () => {
    const closeBtns = document.querySelectorAll('.window__close')
    const hideBtns = document.querySelectorAll('.window__hide')
    closeBtns.forEach(el => {
        el.addEventListener('click', e => {
            const dataId = e.target.closest('.window').getAttribute('id')
            deleteElem(`#${dataId}`)
            deleteElem(`[bookmark-id='${dataId}']`)
        })
    })
    hideBtns.forEach(el => {
        el.addEventListener('click', e => {
            const dataId = e.target.closest('.window').getAttribute('id')
            deleteElem(`#${dataId}`)
        })
    })
}

const bookmarksClick = () => {
    const bookmarks = document.querySelectorAll('.bookmark')
    bookmarks.forEach(el => {
        el.addEventListener('click', e => {
            const dataId = e.target.closest('.bookmark').getAttribute('bookmark-id')
            const openShortcut = defaultData.filter(el => el.id === dataId)
            createWindow(openShortcut[0])
        })
    })
}

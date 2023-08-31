document.addEventListener('scroll', e => {
  const blockTextAll = document.querySelectorAll('.single-blog__text p')
  const navLinks = document.querySelectorAll('.blog-aside__ancors-link')
  blockTextAll.forEach(el => {
    const top = el.offsetTop - 100
    const bottom = top + el.clientHeight;
    const scroll = $(window).scrollTop();
    const id = el.getAttribute('id');
    if (scroll > top && scroll < bottom) {
      navLinks.forEach(el => {
        el.classList.remove('active')
        if (el.getAttribute('scroll-href') === `#${id}`) {
          el.classList.add('active')
        }
      })

    }
  })
})
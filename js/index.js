'use strict'

const openBtn = document.querySelector('.hamburger'),
      closeBtn = document.querySelector('.menu-sidebar__close'),
      overlay = document.querySelector('.overlay'),
      sidebar = document.querySelector('.menu-sidebar'),
      linkBody = document.querySelector('body')

openBtn.addEventListener('click', () => {
    overlay.style.display = 'block'
    sidebar.style.left = '0px'
    linkBody.style.overflow = 'hidden'
})

closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none'
    sidebar.style.left = '-100%'
    linkBody.style.overflow = 'auto'
})
    
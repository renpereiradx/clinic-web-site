const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.header__nav')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active')
  hamburger.className.includes('is-active')
    ? navMenu.classList.add('visible')
    : navMenu.classList.remove('visible')
})

document.querySelector('#doctorsNavItemArrow').addEventListener('click', () => {
  document.querySelector('#doctorsNavList').classList.toggle('is-active')
  document.querySelector('#doctorsNavItemArrow').classList.toggle('is-active')
})

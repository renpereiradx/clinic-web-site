const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.header__nav');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  hamburger.className.includes('is-active') ? navMenu.classList.add('visible') : navMenu.classList.remove('visible');
});

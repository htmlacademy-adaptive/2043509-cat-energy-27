const mainNavToggle = document.querySelector('.main-nav__toggle');
const mainHeader = document.querySelector('.header-main');
const popUpMenu = document.querySelector('.pop-up-menu');

mainHeader.classList.remove('header-main--no-js')

popUpMenu.classList.remove('pop-up-menu--no-js')

mainNavToggle.classList.remove('main-nav__toggle--no-js')

const togglePopUp = function() {
  mainNavToggle.addEventListener('click', (evt) => {
  evt.preventDefault();
  popUpMenu.classList.toggle('pop-up-menu--is-open');
  mainNavToggle.classList.toggle('main-nav__toggle--close');
  });
}

togglePopUp();

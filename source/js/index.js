const mainNavToggle = document.querySelectorAll('.main-nav__toggle');
const menuOpenButton = document.querySelector('.main-nav__toggle--open');
const menuCloseButton = document.querySelector('.main-nav__toggle--close');
const popUpMenu = document.querySelector('.pop-up-menu');
const mapLink = document.querySelector('.map__link');
const mapFrame = document.querySelector('.map__frame');
const sliderWrapper = document.querySelectorAll('.slider__img-wrapper');

if (popUpMenu.classList.contains('pop-up-menu--no-js')) {
  popUpMenu.classList.remove('pop-up-menu--no-js')
}

mainNavToggle.forEach(element => {
if (element.classList.contains('main-nav__toggle--no-js')) {
  element.classList.remove('main-nav__toggle--no-js')
}
})

sliderWrapper.forEach(element => {
  if (element.classList.contains('slider__img-wrapper--no-js')) {
    element.classList.remove('slider__img-wrapper--no-js')
  }
  })

if (mapLink.classList.contains('map__link--no-js')) {
  mapLink.classList.remove('map__link--no-js')
}

if (mapFrame.classList.contains('map__frame--no-js')) {
  mapFrame.classList.remove('map__frame--no-js')
}


const openPopUp = function() {
  menuOpenButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  popUpMenu.classList.toggle('pop-up-menu--is-open');
  menuOpenButton.classList.toggle('visually-hidden');
  menuCloseButton.classList.toggle('visually-hidden');
  });
}

const closePopUp = function () {
  menuCloseButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    popUpMenu.classList.toggle('pop-up-menu--is-open');
    menuOpenButton.classList.toggle('visually-hidden');
    menuCloseButton.classList.toggle('visually-hidden');
    });
}

openPopUp();
closePopUp();

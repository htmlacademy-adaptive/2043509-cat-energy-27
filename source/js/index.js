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


function initComparisons() {
  let x, i;
  /* Find all elements with an "overlay" class: */
  x = document.getElementsByClassName("slider__img-wrapper--overlay");
  for (i = 0; i < x.length; i++) {
    /* Once for each "overlay" element:
    pass the "overlay" element as a parameter when executing the compareImages function: */
    compareImages(x[i]);
  }

  function compareImages(img) {
    let  clicked = 0, w, h;
    let slider = document.querySelector(".slider__compare-button");
    /* Get the width and height of the img element */
    w = img.offsetWidth;
    h = img.offsetHeight;
    /* Set the width of the img element to 50%: */
    img.style.width = (w) + "px";

    /* Position the slider in the middle: */

    slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
    slider.style.left = (w) - (slider.offsetWidth / 2) + "px";

    /* Execute a function when the mouse button is pressed: */
    slider.addEventListener("mousedown", slideReady);
    /* And another function when the mouse button is released: */
    window.addEventListener("mouseup", slideFinish);
    /* Or touched (for touch screens: */
    slider.addEventListener("touchstart", slideReady);
     /* And released (for touch screens: */
    window.addEventListener("touchend", slideFinish);
    function slideReady(e) {
      /* Prevent any other actions that may occur when moving over the image: */
      e.preventDefault();
      /* The slider is now clicked and ready to move: */
      clicked = 1;
      /* Execute a function when the slider is moved: */
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      /* The slider is no longer clicked: */
      clicked = 0;
    }
    function slideMove(e) {
      let pos;
      /* If the slider is no longer clicked, exit this function: */
      if (clicked == 0) return false;
      /* Get the cursor's x position: */
      pos = getCursorPos(e)
      /* Prevent the slider from being positioned outside the image: */
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      /* Execute a function that will resize the overlay image according to the cursor: */
      slide(pos);
    }
    function getCursorPos(e) {
       let a, x = 0;
      e = (e.changedTouches) ? e.changedTouches[0] : e;
      /* Get the x positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x coordinate, relative to the image: */
      x = e.pageX - a.left;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      return x;
    }
    function slide(x) {
      /* Resize the image: */
      img.style.width = x + "px";
      /* Position the slider: */
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
    }
  }
}

initComparisons();

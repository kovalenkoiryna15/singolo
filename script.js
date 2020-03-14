const body = document.querySelector('body');

const Singolo = document.getElementById('s1');
window.addEventListener("unload", function() {
  Singolo.scrollIntoView();
});

const menu = document.querySelector('.menu-container');
menu.addEventListener('click', (event) => {
  event.preventDefault();
  menu.querySelectorAll('a').forEach(elem => elem.classList.remove('active'));
  event.target.classList.add('active');
  let blockName = event.target.getAttribute('href').substring(1);
  let block = document.getElementById(blockName);
  block.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

const sliderBlock = document.querySelector('.slider-block');
const containerSlide1 = document.querySelector('.container-Slide-1');
const containerSlide2 = document.querySelector('.container-Slide-2');
let sliders = [containerSlide1, containerSlide2];
let currentSlide = sliders[0];

const arrowPrevious = document.querySelector('.arrow-container-to-left');
const arrowNext = document.querySelector('.arrow-container-to-right');
const arrows = [arrowPrevious, arrowNext];

arrows.forEach( (elem, index) => {
  elem.addEventListener('click', (event) => {
    event.preventDefault();
    if (currentSlide == sliders[0]) {
      if (index == 0) {
        sliderBlock.style.background = '#648BF0';
        sliders[0].style.display = 'none';
        sliders[1].style.display = 'flex';
        currentSlide = sliders[1];
      } 
      if (index == 1) {
        sliderBlock.style.background = '#648BF0';
        sliders[0].style.display = 'none';
        sliders[1].style.display = 'flex';
        currentSlide = sliders[1];
      }
    } else {
      if (index == 0) {
        sliderBlock.style.background = '#f06c64';
        sliders[1].style.display = 'none';
        sliders[0].style.display = 'flex';
        currentSlide = sliders[0];
      } 
      if (index == 1) {
        sliderBlock.style.background = '#f06c64';
        sliders[1].style.display = 'none';
        sliders[0].style.display = 'flex';
        currentSlide = sliders[0];
      }
    }
    
      
  })
})


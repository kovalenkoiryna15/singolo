const body = document.querySelector('body');

// Header ...
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
// Sandwich ...
const sandwich1 = document.querySelector('.sandwich1');
const sandwich2 = document.querySelector('.sandwich2');
const sandwichMenuContainer = document.querySelector('.sandwich-menu-container');

const sandwichContainer = document.querySelector('.sandwich-container');
const sandwichMenu = document.querySelector('.sandwich-menu');
sandwich1.addEventListener('click', (event) => {
  event.preventDefault();
  sandwich1.style.display = 'none';
  sandwichContainer.style.display = 'block';
});
sandwich2.addEventListener('click', (event) => {
  event.preventDefault();
  sandwich1.style.display = 'block';
  sandwichContainer.style.display = 'none';
});

sandwichMenu.addEventListener('click', (event) => {
  sandwichMenu.querySelectorAll('a').forEach(elem => elem.classList.remove('active'));
  event.target.classList.add('active');
  let blockName = event.target.getAttribute('href').substring(1);
  let block = document.getElementById(blockName);
  block.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
  event.target.classList.remove('active');
  sandwichContainer.style.display = 'none';
  sandwich1.style.display = 'block';
  
});

// Slider ...
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
      };
    };    
  });
});

// Phones ...
const phoneV = document.querySelector('.p-v-p');
const phoneH = document.querySelector('.p-h-p');
const phones = [phoneV, phoneH];

class Phone {
  constructor(phone) {
    this.display = 1;
    if (phone == phoneV) {
      this.phoneDisplay = document.querySelector('.p-v-d');
    } else {
      this.phoneDisplay = document.querySelector('.p-h-d');
    };
  };
  render() {
    if (this.display == 1) {
      this.phoneDisplay.style.display = 'none';
      this.display = 0;
    } else {
      this.phoneDisplay.style.display = 'block';
      this.display = 1;
    };
  };
};
const VerticalPhone = new Phone (phoneV);
const HorizontalPhone = new Phone (phoneH);

phones.forEach((elem, index) => {
  elem.addEventListener('click', (event) => {
    event.preventDefault();
    if (index == 0) {
      VerticalPhone.render();
    } else {
      HorizontalPhone.render();
    };
  });
});

// Tabs...
let portfolioContainer = document.querySelector('.portfolio-gallery');
const all = document.querySelector('#all');
const webDesign = document.querySelector('#web-design');
const graphicDesign = document.querySelector('#graphic-design');
const artwork = document.querySelector('#artwork');
const menuItems = [all, webDesign, graphicDesign, artwork];

let portfolioImagesSRCs = [];
const imagesCount = 12;

function createImageMarkup(i) { 
  let wrapper = document.createElement('div');
  wrapper.classList.add('portfolio-gallery-item');
  let image = document.createElement('img');  
  image.setAttribute('src', `assets/pic${i}.jpg`);
  image.setAttribute('alt', '');
  wrapper.appendChild(image);  
  return wrapper;
};

class MenuItem {
  constructor () {
    this.active = 0;
    this.portfolio = [];    
  }
  render(item) {
    
    portfolioContainer.innerHTML = '';
     
    if (item == all) {
      for (let i = imagesCount; i > 0; i--) {
        let elem = createImageMarkup(i);
        this.portfolio.push(elem);         
      };
    } else if (item == webDesign) {
      for (let i = 1; i <= imagesCount; i++) {
        let elem = createImageMarkup(i);
        this.portfolio.push(elem);         
      };     
    } else if (item == graphicDesign) {
      for (let i = 1; i <= imagesCount; i = i+2) {
        let elem = createImageMarkup(i);
        this.portfolio.push(elem);         
      };      
      for (let i = 2; i <= imagesCount; i = i+2) {
        let elem = createImageMarkup(i);
        this.portfolio.push(elem);         
      };
    } else if (item == artwork) {
      for (let i = 2; i <= imagesCount; i = i+2) {
        let elem = createImageMarkup(i);
        this.portfolio.push(elem);         
      };
      for (let i = 1; i <= imagesCount; i = i+2) {
        let elem = createImageMarkup(i);
        this.portfolio.push(elem);         
      }; 
    } else {
      console.log('error');
    };
    this.portfolio.forEach(elem =>{
      portfolioContainer.appendChild(elem);
    });        
  };
};

const All = new MenuItem(all);
const WebDesign = new MenuItem(webDesign);
const GraphicDesign = new MenuItem(graphicDesign);
const Artwork = new MenuItem(artwork);

menuItems.forEach(elem => {
  elem.addEventListener('click', (event) =>{
    event.preventDefault();    
    if (elem == all) {
      All.render(all);
    } else if (elem == webDesign) {
      WebDesign.render(webDesign);
    } else if (elem == graphicDesign) {
      GraphicDesign.render(graphicDesign);
    } else if (elem == artwork) {
      Artwork.render(artwork);
    } else {
      console.log('error');
    };
  });
});

// Tabs Activation...
portfolioContainer.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelectorAll('img').forEach(elem => elem.classList.remove('activeImage'));
  event.target.classList.add('activeImage');      
});

// Form...
const form = document.querySelector('form');

let subjectFieldDV = 'Без темы';
let userMessageValueDV = 'Без описания';

form.onsubmit = function (event) {
  event.preventDefault();
  const id = Number(form.dataset.id);
  let userNameField = document.querySelector('[name="name"]').value;
  let emailField  = document.querySelector('[name="email"]').value;
  
  let subjectField  = (document.querySelector('[name="subject"]').value != "")? document.querySelector('[name="subject"]').value : subjectFieldDV;
  let userMessageField  = (document.querySelector('[name="userMessage"]').value != "")? `Описание: Portfolio project`: userMessageValueDV;

  const user = [ userNameField , emailField , subjectField , userMessageField];
  showMessage(user);
  form.reset();  
  form.dataset.id = '';
};

function showMessage (user) {

  let [userNameValue, emailValue, subjectValue, userMessageValue] = user;

  let messageBlock = document.createElement('div');
  messageBlock.classList.add('message-block');
  let messageContainer = document.createElement('div');

  let successText = document.createElement('p');
  successText.textContent = 'Письмо отправлено';
  messageContainer.appendChild(successText);
  let subject = document.createElement('p');
  subject.textContent = (subjectValue != subjectFieldDV)? subjectValue: subjectFieldDV;;
  messageContainer.appendChild(subject);
  let userMessage = document.createElement('p');
  userMessage.textContent = (userMessageValue != userMessageValueDV)? userMessageValue: userMessageValueDV;
  messageContainer.appendChild(userMessage);
  let btnOk = document.createElement('button');
  btnOk.textContent = 'OK';
  btnOk.addEventListener('click', (event) => {
    event.preventDefault();
    body.removeChild(messageBlock);
  })
  messageContainer.appendChild(btnOk);
  messageContainer.classList.add('message-container');
  messageBlock.appendChild(messageContainer);
  body.appendChild(messageBlock);
  
}













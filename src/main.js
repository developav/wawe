
// import JustValidate from '../node_modules/just-validate/dist/just-validate.es.js'


const validation = new JustValidate('#formAbout', {
    errorFieldCssClass: 'is-invalid', 
});
validation
  .addField('#nameAbout', [
    {
      rule: 'required',
      value: 3,
      errorMessage: 'Введите логин',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      rule: 'email',
      errorMessage: 'Введите корректный Email',
    },
  ])
  .addField('#about__texarea', [
    {
      rule: 'required',
      value: 3,
    },
  ])


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 4,
    spaceBetween: 30,
    variableWidth : true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      120: {
        slidesPerView: 1,
        spaceBetween: 200
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 5
      },
      850: {
        slidesPerView: 2,
        spaceBetween: 25
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  });

// open people

document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.quests__group-link').forEach(function(tabsBtn){
        tabsBtn.addEventListener('click',function(event){
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.quests__card').forEach(function(workСontainer){
                workСontainer.classList.remove('quests__card-active')
            });
            document.querySelector(`[data-target = "${path}"]`).classList.add('quests__card-active')
        });
        
    });
});

//Popup container 

(function(){
  let button = document.querySelector('.header__nav__button');
  let popup = document.querySelector('.header__popup');
  let closePopup = document.querySelector('.header__close');
  let modal = document.querySelector('.header__pop-modal')
  let body = document.getElementsByTagName('body')
  button.addEventListener('click', function(){
    document.body.classList.add('disable-scroll');
    popup.classList.add('show__popup');
    popup.classList.add('fade');
    popup.classList.add('animate-open');
    modal.classList.add('is-open');
  });

  closePopup.addEventListener('click', function(){
    popup.classList.remove('show__popup');
    popup.classList.remove('fade');
    popup.classList.remove('animate-open');
    modal.classList.remove('is-open');
    document.body.classList.remove('disable-scroll');
  })

})();

// Accordion about block

let accordion = document.getElementById('accordion');
accordion.addEventListener('click', change);
function change(event) {
  let targ = event.target;
  if (targ.tagName !== 'H3') return;
  if (targ.classList.contains('select__list')) {
    hideAll();
  } else {
    hideAll();
    targ.classList.add('select__list');
    showText(targ.nextElementSibling);
  }
}
function hideAll() {
  let h3El = accordion.querySelectorAll('h3');
  let divEl = accordion.querySelectorAll('div');
  for (let i = 0; i < h3El.length; i++) {
    h3El[i].classList.remove('select__list');
  }
  for (let i = 0; i < divEl.length; i++) {
    divEl[i].style.height = '0';
  }
}
function showText(textEl) {
  textEl.style.height = textEl.scrollHeight + 'px';
}

//Burger menu

// let headButton = document.getElementById('button')
// headButton.addEventListener('click', function(){
//   headButton.classList.toggle('nav__btn_active');
//   document.querySelector('.header__nav').classList.toggle('header__nav-active');
//   document.querySelector('.bar__nav').classList.toggle('bar__nav-active');
// })

//Open list at 320px

let etherButton = document.querySelector('.ether__btn');
let barIcon = document.querySelector('.bar__icon');
let openButton = document.querySelector('.ether__btn-open');
let closeButton = document.querySelector('.ether__btn-close');
let hero = document.querySelector('.hero');

etherButton.addEventListener('click', function(){
  barIcon.classList.toggle('bar__icon-active');
  document.querySelector('.header__bottom').classList.toggle('bar__active')
  openButton.classList.toggle('close');
  closeButton.classList.toggle('open');
  hero.classList.toggle('hero__down');
});

//Btn open podcasts
let butttonPodcast = document.querySelector('.podcasts__btn-else');
let listItem = document.querySelector('.podcasts__item');
butttonPodcast.addEventListener('click',function(){
  document.querySelectorAll('.podcasts__item').forEach(function(workСontainer){
    workСontainer.classList.toggle('podcasts__item_active')
});
});

//Validation form popup
let form = document.querySelector('.header__form')
let validateBtn = form.querySelector('.header__submit')
let from = form.querySelector('.header__input-form')
let password = document.getElementById("password")

form.addEventListener('submit', function(event){

  if(!from.value || !password.value){
    event.preventDefault()
    from.classList.add('is-invalid')
    let error = document.createElement('div')
    error.className = 'error'
    error.style.color = 'red'
    error.innerHTML = 'Введите логин'
    from.parentElement.insertBefore(error,from)
    password.classList.add('is-invalid')
    let errorPas = document.createElement('div')
    errorPas.className = 'errorPas'
    errorPas.style.color = 'red'
    errorPas.innerHTML = 'Введите пароль'
    password.parentElement.insertBefore(errorPas,password)
  }
});

let closeBtn = document.querySelector('.menu__btn');
let headButton = document.getElementById('button')
closeBtn.addEventListener('click', function(){
  closeBtn.classList.toggle('open__burger');
  document.querySelector('.header__nav').classList.toggle('header__nav-active');
  document.querySelector('.bar__nav').classList.toggle('bar__nav-active');
  document.body.classList.toggle('over');
});

window.addEventListener('scroll', () => {
if (window.scrollY >= 20) {
  closeBtn.classList.add('done');
} else {
  closeBtn.classList.remove('done');
}
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 4,
    spaceBetween: 30,
  
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
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is >= 480px
      850: {
        slidesPerView: 2,
        spaceBetween: 25
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  });


document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.quests__group-link').forEach(function(tabsBtn){
        tabsBtn.addEventListener('click',function(event){
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.guests__card').forEach(function(workСontainer){
                workСontainer.classList.remove('guests__card-active')
            });
            document.querySelector(`[data-target = "${path}"]`).classList.add('guests__card-active')
        });
        
    });
});

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

let headButton = document.getElementById('button')
headButton.addEventListener('click', function(){
  headButton.classList.toggle('nav__btn_active');
  document.querySelector('.header__nav').classList.toggle('header__nav-active');
})

let etherButton = document.querySelector('.ether__btn');
let barIcon = document.querySelector('.bar__icon');
let openButton = document.querySelector('.ether__btn-open');
let closeButton = document.querySelector('.ether__btn-close')

etherButton.addEventListener('click', function(){
  barIcon.classList.toggle('bar__icon-active');
  document.querySelector('.header__bottom').classList.toggle('bar__active')
  openButton.classList.toggle('close');
  closeButton.classList.toggle('open');
});



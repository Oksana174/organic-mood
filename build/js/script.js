// menu gamburger

let navMain = document.querySelector('.navigation');
let button = document.querySelector('.header__menu-button');

if (button) {
    button.addEventListener('click', function (evt) {
        evt.preventDefault ();
        
        document.body.classList.toggle('lock');
        navMain.classList.toggle('navigation--open');
        button.classList.toggle('header__menu-button--active');
    });
};


//   прокрутка при клике

const menuLinks = document.querySelectorAll('.navigation__link[data-goto]');

if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) 
        {
            const gotoBlock = document.querySelector(menuLink.dataset.goto); 
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (navMain.classList.contains('navigation--open')) {
                document.body.classList.remove('lock');
                navMain.classList.remove('navigation--open');
                button.classList.remove('header__menu-button--active');
                navMain.classList.add('navigation--closed');
            }

            window.scrollTo ({
               top: gotoBlockValue,
               behavior: "smooth"
            });
            e.preventDefault();
        }
    }
};

// слайдер для блока отзывы

let btnRight = document.querySelector('.reviews__btn--next');
let btnLeft = document.querySelector('.reviews__btn--prev');
let reviewsBlock = document.querySelector('.reviews');

if (reviewsBlock) {
/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 0;

/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);  
}

/* Функция перелистывания: */
function showSlides(n) {
    let sliderImages = document.querySelector('.reviews__list');
    let slides = sliderImages.querySelectorAll('.reviews__item');
    
    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
  
    for (let slide of slides) {
        slide.classList.remove('reviews__item--active');
    }
    
    slides[slideIndex - 1].classList.add('reviews__item--active');
};

    btnRight.addEventListener('click', previousSlide);
    btnLeft.addEventListener('click', nextSlide);
};


// слайдер для блока бестселлеры

let btnNext = document.querySelector('.best-sellers__btn--next');
let btnPrev = document.querySelector('.best-sellers__btn--prev');
let bestSellerBlock = document.querySelector('.best-sellers');
let slideIndexProduct = 0;

if (bestSellerBlock) {
showSlidesProduct(slideIndexProduct);

function nextSlideProduct() {
    showSlidesProduct(slideIndexProduct += 1);
}

function previousSlideProduct() {
    showSlidesProduct(slideIndexProduct -= 1);  
}

/* Функция перелистывания: */
function showSlidesProduct(n) {
    let sliderImages = document.querySelector('.best-sellers__slider');
    let slides = sliderImages.querySelectorAll('.product-card');
    
    /* Проверяем количество слайдов: */
    if (n > slides.length) {
        slideIndexProduct = 1;
    }
    if (n < 1) {
        slideIndexProduct = slides.length;
    }
  
    for (let slide of slides) {
        slide.classList.remove('product-card--active');
    }
    
    slides[slideIndexProduct - 1].classList.add('product-card--active');
};

btnPrev.addEventListener('click', previousSlideProduct);
btnNext.addEventListener('click', nextSlideProduct);

};
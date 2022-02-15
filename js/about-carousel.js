
const slides = document.querySelectorAll('.about-box__carousel-item--1');
const allSlides = slides.length;
const slides2 = document.querySelectorAll('.about-box__carousel-item--2');
const allSlides2 = slides2.length;
const slides3 = document.querySelectorAll('.about-box__carousel-item--3');
const allSlides3 = slides3.length;
let slidePosition = 0;
let slidePosition2 = 0;
let slidePosition3 = 0;

// // FIRST BOX

document.querySelector('.fa-arrow-circle-left--1').addEventListener('click', function () {
    moveToPrevSlide();
});

document.querySelector('.fa-arrow-circle-right--1').addEventListener('click', function () {
    moveToNextSlide();
});

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('about-box__carousel-item--visible');
        slide.classList.add('about-box__carousel-item--hidden');
    }

    slides[slidePosition].classList.add('about-box__carousel-item--visible');
}

function moveToNextSlide() {
    if (slidePosition === allSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    updateSlidePosition();
}

function moveToPrevSlide() {
    if (slidePosition === 0) {
        slidePosition = allSlides - 1;
    } else {
        slidePosition--;
    }

    updateSlidePosition();
}

// SECOND BOX

document.querySelector('.fa-arrow-circle-left--2').addEventListener('click', function () {
    moveToPrevSlide2();
});

document.querySelector('.fa-arrow-circle-right--2').addEventListener('click', function () {
    moveToNextSlide2();
});

function updateSlidePosition2() {
    for (let slide2 of slides2) {
        slide2.classList.remove('about-box__carousel-item--visible');
        slide2.classList.add('about-box__carousel-item--hidden');
    }

    slides2[slidePosition2].classList.add('about-box__carousel-item--visible');
}

function moveToNextSlide2() {
    if (slidePosition2 === allSlides2 - 1) {
        slidePosition2 = 0;
    } else {
        slidePosition2++;
    }

    updateSlidePosition2();
}

function moveToPrevSlide2() {
    if (slidePosition2 === 0) {
        slidePosition2 = allSlides2 - 1;
    } else {
        slidePosition2--;
    }

    updateSlidePosition2();
}

// THIRD BOX

document.querySelector('.fa-arrow-circle-left--3').addEventListener('click', function () {
    moveToPrevSlide3();
});

document.querySelector('.fa-arrow-circle-right--3').addEventListener('click', function () {
    moveToNextSlide3();
});

function updateSlidePosition3() {
    for (let slide3 of slides3) {
        slide3.classList.remove('about-box__carousel-item--visible');
        slide3.classList.add('about-box__carousel-item--hidden');
    }

    slides3[slidePosition3].classList.add('about-box__carousel-item--visible');
}

function moveToNextSlide3() {
    if (slidePosition3 === allSlides3 - 1) {
        slidePosition3 = 0;
    } else {
        slidePosition3++;
    }

    updateSlidePosition3();
}

function moveToPrevSlide3() {
    if (slidePosition3 === 0) {
        slidePosition3 = allSlides3 - 1;
    } else {
        slidePosition3--;
    }

    updateSlidePosition3();
}






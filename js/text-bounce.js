const aboutText = document.querySelector('.about-text');
const lastText = document.querySelector('.last-text__rotate');
const contactText = document.querySelector('.contact-wrapper');

window.addEventListener('scroll',  _.throttle(() => {
    if ((scrollY >= 553 && screen.width >= 700) || (scrollY >= 300 && screen.width <= 700)) {
        aboutText.classList.add('text-bounce');
    }

    if ((scrollY >= 1250 && screen.width >= 700) || (scrollY >= 2232 && screen.width <= 700)) {
        lastText.classList.add('text-bounce');
    }

    if ((scrollY >= 1850 && screen.width >= 700) || (scrollY >= 2500 && screen.width <= 700)) {
        contactText.classList.add('text-bounce');
    }
}, 300));

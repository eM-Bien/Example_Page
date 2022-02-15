const nav = document.querySelector('.nav-wrapper');
const navLinks = document.querySelector('.nav-links');
const navBgWrap = document.querySelector('.nav-wrapper__unwrap--close');
const navMobile = document.querySelector('.nav-mobile');

const media = window.matchMedia('(min-width: 1600px)');

let previousScrollTop;
let isScrolling;

/* NAVIGATION - WRAP/UNWRAP */ 

const navClick = () => {

    navMobile.classList.toggle('nav-mobile--click');
    navBgWrap.classList.toggle('nav-wrapper__unwrap');
    navLinks.classList.toggle('active');
  
    if (media.matches) {
      nav.classList.remove('nav-wrapper__unwrap');
    }
  
    media.addEventListener('change', function () {
      nav.classList.remove('nav-wrapper__unwrap');
      navMobile.classList.remove('nav-mobile--click');
    
      navLinks.classList.remove('active');
    });
  }
  
  navBgWrap.addEventListener('click', navClick);
  

/* HIDE NAV WHILE SCROLLING */

const hasScrolled = () => {
  
  const scrollTop = window.scrollY;
  
  if (scrollTop > previousScrollTop && !(nav.classList.contains('nav-wrapper__unwrap'))) {
    nav.classList.add('nav-wrapper--top');
  } else {
    nav.classList.remove('nav-wrapper--top');
  }

  previousScrollTop = scrollTop;

}

document.addEventListener('scroll', _.throttle(() => {
  isScrolling = true;
    
    if (isScrolling) {
      hasScrolled();
      isScrolling = false;
    }
  }, 100));



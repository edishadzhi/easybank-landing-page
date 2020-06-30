const hamburger = document.getElementById('hamburger');
const mobileMenu = document.querySelector('.mobile-navigation');
const closeMobileMenu = document.getElementById('icon-close-hamburger');


hamburger.addEventListener('click', openMenu);
closeMobileMenu.addEventListener('click', closeMenu);



function openMenu() {
    mobileMenu.style.display = "flex";

    lowerOpacity();
    preventScroll();
    clickedOutsideMenu();
    window.onresize = reportWindowWidth;
}

function closeMenu() {
    mobileMenu.style.animation = 'slide-menu-out 0.5s ease';

    setTimeout(() => {
        mobileMenu.style.display = "none";
        restoreOpacity();
        enableScroll();
        mobileMenu.style.animation = '';
        window.onresize = '';
        return;
    }, 500)
    
}

function clickedOutsideMenu() {
document.querySelector('.first-section').addEventListener('click', closeMenu);
}    

function lowerOpacity() {
    document.querySelector('.first-section').classList.add('lower-opacity');
    document.querySelector('.logo').classList.add('lower-opacity');
}

function restoreOpacity() {
    document.querySelector('.first-section').classList.remove('lower-opacity');
    document.querySelector('.logo').classList.remove('lower-opacity');
}

function preventScroll() {
    document.body.classList.add('stop-scrolling');
}

function enableScroll() {
    document.body.classList.remove('stop-scrolling');
}

function reportWindowWidth() {
    if(innerWidth > 999) {
        closeMenu();
    }
  }
  


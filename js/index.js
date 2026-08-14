const nav = document.querySelector('nav');
const navBtns = document.querySelectorAll('.navigation-btn');
const openCloseBtn = document.querySelector('.btn-abrir-fechar');
const iconBtnOpenClose = openCloseBtn.querySelector('span');
const homeBtn = document.getElementById('btn-home');
const navTopText = document.querySelector('.nav-top-txt');
const portfolioBtn = document.getElementById('portfolio-btn');
const aboutBtn = document.getElementById('about-btn');
const contactBtn = document.getElementById('contact-btn');
const sectionPortifolio = document.getElementById('portfolio');
const sectionAbout = document.getElementById('about');
const sectionContact = document.getElementById('contact');
const marginTopScroll = 48;
let navStateOpen;

const openCloseMenu = () => {
    let width = window.innerWidth;
    if (width < 768) {
        if (navStateOpen == false) {
            nav.classList.remove('close');
            nav.classList.add('open');

            iconBtnOpenClose.innerHTML = 'close';
            navTopText.innerHTML = 'Menu';

            checkNavState();
        } else {
            nav.classList.remove('open');
            nav.classList.add('close');

            iconBtnOpenClose.innerHTML = 'menu';
            navTopText.innerHTML = 'Antonio Cruvinel Caixeta';

            checkNavState();
        }
    }
};

let checkNavState = () => {
    if (nav.classList.contains('open')) {
        console.log('O menu está aberto');
        navStateOpen = true;
    } else if (nav.classList.contains('close')) {
        console.log('O menu está fechado');
        navStateOpen = false;
    } else {
        nav.classList.add('close');
        navStateOpen = false;
        console.log('O menu está fechado');
    }
};

function scrollToSection(section) {
    const marginTop = 72;
    let position = section.offsetTop - marginTop;
    window.scrollTo({
        top: position,
        behavior: 'smooth',
    });
}

function cloneSocialMediaAndPrintOnMenu() {
    let socialMedia = document
        .querySelector('.social-icons-container')
        .cloneNode(true);
    nav.insertAdjacentElement('beforeend', socialMedia);
}

function showNameHomeBtn() {
    var y = window.scrollY;

    if (y > 180) {
        homeBtn.style.opacity = '1';
    } else {
        homeBtn.style.opacity = '0';
    }
}

portfolioBtn.addEventListener('click', function () {
    scrollToSection(sectionPortifolio);
    openCloseMenu();
});

aboutBtn.addEventListener('click', function () {
    scrollToSection(sectionAbout);
    openCloseMenu();
});

contactBtn.addEventListener('click', function () {
    scrollToSection(sectionContact);
    openCloseMenu();
});

homeBtn.addEventListener('click', function () {
    scrollToSection(nav);
});

openCloseBtn.addEventListener('click', openCloseMenu);

window.addEventListener('scroll', showNameHomeBtn);

checkNavState();
cloneSocialMediaAndPrintOnMenu();

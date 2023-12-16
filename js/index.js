const nav = document.querySelector("nav");
const navBtns = document.querySelectorAll(".navigation-btn");
const openCloseBtn = document.querySelector(".btn-abrir-fechar");
const iconBtnOpenClose = openCloseBtn.querySelector("span");
const navTopText = document.querySelector(".nav-top-txt");
let navStateOpen;

const openCloseMenu = (btn) => {
    btn.addEventListener("click", function () {
        if (navStateOpen == false) {
            nav.classList.remove("close");
            nav.classList.add("open");

            iconBtnOpenClose.innerHTML = "close";

            checkNavState();
        } else {
            nav.classList.remove("open");
            nav.classList.add("close");

            iconBtnOpenClose.innerHTML = "menu";

            checkNavState();
        }
    });
};

let checkNavState = () => {
    if (nav.classList.contains("open")) {
        console.log("O menu está aberto");
        navStateOpen = true;
    } else if (nav.classList.contains("close")) {
        console.log("O menu está fechado");
        navStateOpen = false;
    } else {
        nav.classList.add("close");
        navStateOpen = false;
        console.log("O menu está fechado");
    }
};

openCloseMenu(openCloseBtn);
checkNavState();

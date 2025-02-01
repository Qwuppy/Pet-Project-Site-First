const firstLine = document.getElementById("FirstArrow");
const secondLine = document.getElementById("SecondArrow");
const thirdLine = document.getElementById("ThirdArrow");
const firstCard = document.getElementById("FirstCard");
const secondCard = document.getElementById("SecondCard");
const thirdCard = document.getElementById("ThirdCard");
const firstCardHover = document.getElementById("FirstCard");
const secondCardHover = document.getElementById("SecondCard");
const thirdCardHover = document.getElementById("ThirdCard");
const CampingButton = document.getElementById("cards-button-camping");
const BikingButton = document.getElementById("cards-button-biking");
const TrackingButton = document.getElementById("cards-button-tracking");

CampingButton.onclick = function () {
    window.open("https://www.youtube.com/watch?v=ca_JnZX1Yfs&ab_channel=Guitar-Science-%D0%A3%D1%80%D0%BE%D0%BA%D0%B8%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%B3%D0%B8%D1%82%D0%B0%D1%80%D1%8B");
}

BikingButton.onclick = function () {
    window.open("https://www.velostrana.ru/gornye-velosipedy/");
}

TrackingButton.onclick = function () {
    window.open("https://www.google.com/search?q=mountain+tracking+jpg&sca_esv=0fd6655462c7c58e&udm=2&biw=1920&bih=919&sxsrf=AHTn8zrKSmRBvnCtf-gm70og2xZrHs549A%3A1738147821963&ei=7QeaZ86_OvaE1fIP-bfguQ8&ved=0ahUKEwiO6vqb4ZqLAxV2QlUIHfkbOPcQ4dUDCBE&uact=5&oq=mountain+tracking+jpg&gs_lp=EgNpbWciFW1vdW50YWluIHRyYWNraW5nIGpwZ0jUElDvBViEEXABeACQAQCYATigAbMCqgEBNrgBA8gBAPgBAZgCBKACpgHCAgQQIxgnwgIJEAAYgAQYExgKwgIIEAAYExgKGB7CAggQABgTGAgYHsICChAAGBMYCBgKGB6YAwCIBgGSBwE0oAffFQ&sclient=img&ih=919&iw=1920#vhid=dLXhGFGPI6PmgM&vssid=mosaic");
}

const prevButton = document.getElementById('leftButtonArrow');
const nextButton = document.getElementById('rightButtonArrow');

const slideCount = 3;

let slideIndex = 1;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);
firstCardHover.addEventListener('mousemove', updateCardsHoverFirst);
secondCardHover.addEventListener('mousemove', updateCardsHoverSecond);
thirdCardHover.addEventListener('mousemove', updateCardsHoverThird);

function showPreviousSlide() {
    if (slideIndex < -2 ) {
        slideIndex == 0;
        slideIndex = (slideIndex - 1 + slideCount) % slideCount;
        updateStatusBar(slideIndex);
        updateCards();
    } else {
        slideIndex = (slideIndex - 1 + slideCount) % slideCount;
        updateStatusBar(slideIndex);
        updateCards();
    }
}

function showNextSlide() {
    if (slideIndex > 2) {
        slideIndex == 0;
        slideIndex = (slideIndex + 1) % slideCount;
        updateStatusBar(slideIndex);
        updateCards();
    } else {
        slideIndex = (slideIndex + 1) % slideCount;
        updateStatusBar(slideIndex);
        updateCards();
    }
}
updateStatusBar(slideIndex);
updateCards();

function updateStatusBar(slideIndex) {
    if (slideIndex == 1 || slideIndex == -2) {
        firstLine.src = "/img/LineNotActive.png";
        secondLine.src = "/img/LineActive.png";

        thirdLine.src = "/img/LineNotActive.png";
    }
    if (slideIndex == 2 || slideIndex -1) {
        firstLine.src = "/img/LineNotActive.png";
        secondLine.src = "/img/LineNotActive.png";
        thirdLine.src = "/img/LineActive.png";
    }
    if (slideIndex == 0) {
        firstLine.src = "/img/LineActive.png";
        secondLine.src = "/img/LineNotActive.png";
        thirdLine.src = "/img/LineNotActive.png";
    }
}

function updateCards() {
    if (slideIndex == 1 || slideIndex == -2) {
        firstCard.className = "block card not-active";
        secondCard.className = "block card active";
        thirdCard.className = "block card not-active";
    }
    if (slideIndex == 2 || slideIndex -1) {
        firstCard.className = "block card not-active";
        secondCard.className = "block card not-active";
        thirdCard.className = "block card active";
    }
    if (slideIndex == 0) {
        firstCard.className = "block card active";
        secondCard.className = "block card not-active";
        thirdCard.className = "block card not-active";
    }
}

function updateCardsHoverFirst() {
    slideIndex = 0;
    updateCards();
    updateStatusBar(slideIndex);
}
function updateCardsHoverSecond() {
    slideIndex = 1;
    updateCards();
    updateStatusBar(slideIndex);
}
function updateCardsHoverThird() {
    slideIndex = 2;
    updateCards();
    updateStatusBar(slideIndex);
}
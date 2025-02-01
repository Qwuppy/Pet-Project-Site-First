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
    window.location.href = "/link.html";
}

BikingButton.onclick = function () {
    window.location.href = "/link.html";
}

TrackingButton.onclick = function () {
    window.location.href = "/link.html";
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
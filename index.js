
let hamb = document.querySelector(".hamb_field");
let headerNav = document.querySelector(".nav-list");
let navLink = document.querySelectorAll(".nav-list li a");



function hambMenu() {
    hamb.classList.toggle("active");
    headerNav.classList.toggle("active");
}

hamb.addEventListener('click', hambMenu);
navLink.forEach(n => n.addEventListener("click", hambMenu));
document.addEventListener("click", (n) => {
    if (headerNav.classList.contains("active") &&
        !(headerNav.contains(n.target)) &&
        !(hamb.contains(n.target))) {
        hambMenu();
    }
});

// service blur button
let gardenButton = document.querySelector('#garden-button')
let lawnButton = document.querySelector('#lawn-button')
let plantingButton = document.querySelector('#planting-button')

let gardenCards = document.querySelectorAll('#garden-card')
let lawnCards = document.querySelector('#lawn-card')
let plantingCards = document.querySelectorAll('#planting-card')
let arrButton = [gardenButton, lawnButton, plantingButton]
let countButtonActive = 0

function blurGardenButton() {
    if (lawnButton.classList.contains("active") && plantingButton.classList.contains("active")) {
        gardenButton.classList.remove("active")
    } else if (lawnButton.classList.contains("active") && !gardenButton.classList.contains("active")) {
        gardenButton.classList.add("active")
        for (let i = 0; i < gardenCards.length; i++) {
            gardenCards[i].classList.remove("active")
        }
    } else if (plantingButton.classList.contains("active") && !gardenButton.classList.contains("active")) {
        gardenButton.classList.add("active")
        for (let i = 0; i < gardenCards.length; i++) {
            gardenCards[i].classList.remove("active")
        }
    } else if (gardenButton.classList.contains("active") && plantingButton.classList.contains("active")) {
        gardenButton.classList.remove("active")
        for (let i = 0; i < gardenCards.length; i++) {
            gardenCards[i].classList.add("active")
        }
    } else if (gardenButton.classList.contains("active") && lawnButton.classList.contains("active")) {
        gardenButton.classList.remove("active")
        for (let i = 0; i < gardenCards.length; i++) {
            gardenCards[i].classList.add("active")
        }
    } else if (gardenButton.classList.contains("active") && !lawnButton.classList.contains("active") && !plantingButton.classList.contains("active")) {
        gardenButton.classList.remove("active")
        lawnCards.classList.remove("active")
        for (let i = 0; i < plantingCards.length; i++) {
            plantingCards[i].classList.remove("active")
        }
    } else if (!gardenButton.classList.contains("active") && !lawnButton.classList.contains("active") && !plantingButton.classList.contains("active")) {
        gardenButton.classList.add("active")
        lawnCards.classList.add("active")
        for (let i = 0; i < plantingCards.length; i++) {
            plantingCards[i].classList.add("active")
        }
    }
}


function blurLawnButton() {
    if (gardenButton.classList.contains("active") && plantingButton.classList.contains("active")) {
        lawnButton.classList.remove("active")
    } else if (gardenButton.classList.contains("active") && !lawnButton.classList.contains("active")) {
        lawnButton.classList.add("active")
        lawnCards.classList.remove("active")
    } else if (plantingButton.classList.contains("active") && !lawnButton.classList.contains("active")) {
        lawnButton.classList.add("active")
        lawnCards.classList.remove("active")
    } else if (lawnButton.classList.contains("active") && plantingButton.classList.contains("active")) {
        lawnButton.classList.remove("active")
        lawnCards.classList.add("active")
    } else if (gardenButton.classList.contains("active") && lawnButton.classList.contains("active")) {
        lawnButton.classList.remove("active")
        lawnCards.classList.add("active")
    } else if (lawnButton.classList.contains("active") && !gardenButton.classList.contains("active") && !plantingButton.classList.contains("active")) {
        lawnButton.classList.remove("active")
        lawnCards.classList.remove("active")
        for (let i = 0; i < gardenCards.length; i++) {
            gardenCards[i].classList.remove("active")
        }
        for (let i = 0; i < plantingCards.length; i++) {
            plantingCards[i].classList.remove("active")
        }
    } else if (!gardenButton.classList.contains("active") && !lawnButton.classList.contains("active") && !plantingButton.classList.contains("active")) {
        lawnButton.classList.add("active")
        for (let i = 0; i < gardenCards.length; i++) {
            gardenCards[i].classList.add("active")
        }
        for (let i = 0; i < plantingCards.length; i++) {
            plantingCards[i].classList.add("active")
        }
    }
}


function blurPlantingButton() {
    if (gardenButton.classList.contains("active") && lawnButton.classList.contains("active")) {
        plantingButton.classList.remove("active")
    } else if (gardenButton.classList.contains("active") && !plantingButton.classList.contains("active")) {
        plantingButton.classList.add("active")
        for (let i = 0; i < plantingCards.length; i++) {
            plantingCards[i].classList.remove("active")
        }
    } else if (lawnButton.classList.contains("active") && !plantingButton.classList.contains("active")) {
        plantingButton.classList.add("active")
        for (let i = 0; i < plantingCards.length; i++) {
            plantingCards[i].classList.remove("active")
        }
    }else if (lawnButton.classList.contains("active") && plantingButton.classList.contains("active")) {
        plantingButton.classList.remove("active")
        for (let i = 0; i < plantingCards.length; i++) {
            plantingCards[i].classList.add("active")
        }
    }else if (gardenButton.classList.contains("active") && plantingButton.classList.contains("active")) {
        plantingButton.classList.remove("active")
        for (let i = 0; i < plantingCards.length; i++) {
            plantingCards[i].classList.add("active")
        }
    } else if (plantingButton.classList.contains("active") && !gardenButton.classList.contains("active") && !lawnButton.classList.contains("active")) {
        plantingButton.classList.remove("active")
            lawnCards.classList.remove("active")
            for (let i = 0; i < gardenCards.length; i++) {
                gardenCards[i].classList.remove("active")
            }
}else if (!gardenButton.classList.contains("active") && !lawnButton.classList.contains("active") && !plantingButton.classList.contains("active")) {
    plantingButton.classList.add("active")
        lawnCards.classList.add("active")
        for (let i = 0; i < gardenCards.length; i++) {
            gardenCards[i].classList.add("active")
        }
}
}



gardenButton.addEventListener('click', blurGardenButton)
lawnButton.addEventListener('click', blurLawnButton)
plantingButton.addEventListener('click', blurPlantingButton)

// accordion
let accordion = document.querySelector('.prices-accordion')
let accordionButtonBasics = document.querySelector("#header-basics")
let accordionButtonStandart = document.querySelector("#header-standart")
let accordionButtonProcare = document.querySelector("#header-procare")
let accordionBodyBasics = document.querySelector('#body-basics')
let accordionBodyStandart = document.querySelector('#body-standart')
let accordionBodyProcare = document.querySelector('#body-procare')
let accordionImgBasics = document.querySelector('#img-basics')
let accordionImgStandart = document.querySelector('#img-standart')
let accordionImgProcare = document.querySelector('#img-procare')


function openAccordionBasics() {
    accordionButtonBasics.classList.toggle('active')
    accordionBodyBasics.classList.toggle('active')
    accordionImgBasics.classList.toggle('active')
    accordionButtonStandart.classList.remove('active')
    accordionBodyStandart.classList.remove('active')
    accordionImgStandart.classList.remove('active')
    accordionButtonProcare.classList.remove('active')
    accordionBodyProcare.classList.remove('active')
    accordionImgProcare.classList.remove('active')
    if (accordionButtonBasics.classList.contains('active') || accordionButtonStandart.classList.contains('active') || accordionButtonProcare.classList.contains('active')) {
        accordion.classList.add('active')
    } else {
        accordion.classList.remove('active')
    }
}
function openAccordionStandart() {
    accordion.classList.toggle('active')
    accordionButtonStandart.classList.toggle('active')
    accordionBodyStandart.classList.toggle('active')
    accordionImgStandart.classList.toggle('active')
    accordionButtonBasics.classList.remove('active')
    accordionBodyBasics.classList.remove('active')
    accordionImgBasics.classList.remove('active')
    accordionButtonProcare.classList.remove('active')
    accordionBodyProcare.classList.remove('active')
    accordionImgProcare.classList.remove('active')
    if (accordionButtonBasics.classList.contains('active') || accordionButtonStandart.classList.contains('active') || accordionButtonProcare.classList.contains('active')) {
        accordion.classList.add('active')
    } else {
        accordion.classList.remove('active')
    }
}
function openAccordionProcare() {
    accordion.classList.toggle('active')
    accordionButtonProcare.classList.toggle('active')
    accordionBodyProcare.classList.toggle('active')
    accordionImgProcare.classList.toggle('active')
    accordionButtonBasics.classList.remove('active')
    accordionBodyBasics.classList.remove('active')
    accordionImgBasics.classList.remove('active')
    accordionButtonStandart.classList.remove('active')
    accordionBodyStandart.classList.remove('active')
    accordionImgStandart.classList.remove('active')
    if (accordionButtonBasics.classList.contains('active') || accordionButtonStandart.classList.contains('active') || accordionButtonProcare.classList.contains('active')) {
        accordion.classList.add('active')
    } else {
        accordion.classList.remove('active')
    }
}

accordionButtonBasics.addEventListener('click', openAccordionBasics)
accordionButtonStandart.addEventListener('click', openAccordionStandart)
accordionButtonProcare.addEventListener('click', openAccordionProcare)


// accordion city

let cityHeader = document.querySelector('.accordion-city')
let cityBody = document.querySelector('.accordion-city-open')
let cityCanandaigua = document.querySelector('#city-Canandaigua')
let cityNewYork = document.querySelector('#city-NewYork')
let cityYonkers = document.querySelector('#city-Yonkers')
let citySherrill = document.querySelector('#city-Sherrill')
let cityCanandaiguaCard = document.querySelector('#city-card-Canandaigua')
let cityNewYorkCard = document.querySelector('#city-card-NewYork')
let cityYonkersCard = document.querySelector('#city-card-Yonkers')
let citySherrillCard = document.querySelector('#city-card-Sherrill')
let selectedCanandaigua = document.querySelector('#city-selected-Canandaigua')
let selectedNewYork = document.querySelector('#city-selected-NewYork')
let selectedYonkers = document.querySelector('#city-selected-Yonkers')
let selectedSherrill = document.querySelector('#city-selected-Sherrill')


function openCity() {
    cityHeader.classList.toggle('active')
    cityBody.classList.toggle('active')
    cityCanandaiguaCard.classList.remove('active')
    cityNewYorkCard.classList.remove('active')
    cityYonkersCard.classList.remove('active')
    citySherrillCard.classList.remove('active')

}
function addCanandaigua() {
    cityHeader.classList.remove('active')
    cityBody.classList.remove('active')
    cityCanandaiguaCard.classList.add('active')
    selectedYonkers.classList.remove('active')
    selectedNewYork.classList.remove('active')
    selectedSherrill.classList.remove('active')
    selectedCanandaigua.classList.add('active')

}
function addNewYork() {
    cityHeader.classList.remove('active')
    cityBody.classList.remove('active')
    cityNewYorkCard.classList.add('active')
    selectedYonkers.classList.remove('active')
    selectedSherrill.classList.remove('active')
    selectedCanandaigua.classList.remove('active')
    selectedNewYork.classList.add('active')
}
function addYonkers() {
    cityHeader.classList.remove('active')
    cityBody.classList.remove('active')
    cityYonkersCard.classList.add('active')
    selectedSherrill.classList.remove('active')
    selectedCanandaigua.classList.remove('active')
    selectedNewYork.classList.remove('active')
    selectedYonkers.classList.add('active')
}
function addSherrill() {
    cityHeader.classList.remove('active')
    cityBody.classList.remove('active')
    citySherrillCard.classList.add('active')
    selectedCanandaigua.classList.remove('active')
    selectedNewYork.classList.remove('active')
    selectedYonkers.classList.remove('active')
    selectedSherrill.classList.add('active')
}


cityHeader.addEventListener('click', openCity)
cityCanandaigua.addEventListener('click', addCanandaigua)
cityNewYork.addEventListener('click', addNewYork)
cityYonkers.addEventListener('click', addYonkers)
citySherrill.addEventListener('click', addSherrill)

selectedCanandaigua.addEventListener('click', openCity)
selectedNewYork.addEventListener('click', openCity)
selectedYonkers.addEventListener('click', openCity)
selectedSherrill.addEventListener('click', openCity)

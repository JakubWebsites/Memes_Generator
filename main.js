const content = document.querySelector(".content");
const collection = document.querySelector(".collection");
const collectionItems = document.querySelectorAll(".collection__item")

const view = document.querySelector(".content__view");
const picture = document.querySelector(".content__background");
const textUp = document.querySelector(".textUp");
const textDown = document.querySelector(".textDown");

const textUpInput = document.querySelector(".textUp__input");
const textDownInput = document.querySelector(".textDown__input");
const selectPictureBtn = document.querySelector(".editor__picture");
const confirmBtnUp = document.querySelector(".textUp__confirm");
const confirmBtnDown = document.querySelector(".textDown__confirm");
const resetBtn = document.querySelector(".editor__resetButton");

let selectedPicture = "";
let textUpContent = "TEKST GÓRNY";
let textDownContent = "TEKST DOLNY";

const setPicture = (e) => {
    selectedPicture = e.target;
    picture.setAttribute("src", selectedPicture.src);
    picture.setAttribute("alt", selectedPicture.alt);
    view.style.width = "auto";
    view.style.height = "auto";
    view.style.backgroundColor = "transparent"
    content.style.display = "grid";
    collection.style.display = "none";
};

const putTextUp = () => {
    textUpContent = textUpInput.value;
    textUp.textContent = textUpContent;
};

const putTextDown = () => {
    textDownContent = textDownInput.value;
    textDown.textContent = textDownContent;
}

const showCollection = () => {
    content.style.display = "none";
    collection.style.display = "grid";
};

const resetAll = () => {
    textUp.textContent = "";
    textDown.textContent = "";
    view.style.width = "100%";
    view.style.height = "25rem";
    view.style.backgroundColor = "#a0a0a0";
    picture.setAttribute("src", "");
    picture.setAttribute("alt", "");
    textUpInput.value = "Miejsce na Twój tekst";
    textDownInput.value = "Miejsce na Twój tekst";
};

for (item of collectionItems) {
    item.addEventListener("click", setPicture);
};

confirmBtnUp.addEventListener("click", putTextUp);
confirmBtnDown.addEventListener("click", putTextDown);
selectPictureBtn.addEventListener("click", showCollection);
resetBtn.addEventListener("click", resetAll);
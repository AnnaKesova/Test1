//import exampleJsonFile from "./Newdocument1.json";

const popup = document.querySelector(".popup-form");
const openPopup = document.querySelector(".popup-open");
const closePopup = document.querySelector(".popup__close");
const dropInput = document.querySelector(".form__item");
const dropList = document.querySelector(".drop");
const dropOption = dropList.querySelectorAll("option");

// ajax запрос GET
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const results = JSON.parse(this.responseText);
    myFunction(results);
  }
};
xhttp.open("GET", "Newdocument1.json", true);
xhttp.send();

let selectHTML = "";

function myFunction(data) {
  const massiveResult = data.map((item) => item.city);
  massiveResult.sort();
  massiveResult.forEach((item) => {
    selectHTML += `<option>${item}</option>`;
    dropList.innerHTML = selectHTML;
  });
}

dropInput.addEventListener("input", (e) => {
  [...dropOption].forEach((item) => {
    if (item.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

console.log(dropInput);
console.log(dropList);
console.log(dropOption);

function popupopen() {
  popup.classList.add("popup_active"); //функция для открытия поп-апа
}

function popupclose() {
  popup.classList.remove("popup_active"); //функция для закрытия
}

function hide() {
  setTimeout(() => dropList.classList.remove("visible"), 300);
}
function show() {
  setTimeout(() => dropList.classList.add("visible"), 300);
}

function dropSelect(e) {
  dropInput.value = e.target.textContent;
  hide();
}

dropInput.addEventListener("input", (e) => {
  [...dropOption].forEach((item) => {
    if (item.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});


openPopup.addEventListener("click", popupopen); // по клику присваевается класс открытия
closePopup.addEventListener("click", popupclose);

dropInput.addEventListener("focus", show, false);
dropInput.addEventListener("blur", hide, false);
dropList.addEventListener("click", dropSelect, false);

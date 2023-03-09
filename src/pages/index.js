import "../pages/index.css";
import exampleJsonFile from "./Newdocument1.json";

const popup = document.querySelector(".popup-form");
const openPopup = document.querySelector(".popup-open");
const closePopup = document.querySelector(".popup__close");
const dropInput = document.querySelector(".form__item");
const dropList = document.querySelector(".drop");


let selectHTML = ""; // для перезаписывания массива

//функция для отображения списка
function renderexampleJsonFile(exampleJsonFile) {
  let results = exampleJsonFile.map((item) => item.city); // преобразуем в массив
  results.sort()//соотируем по алфавиту
//перебераем массив
  results.forEach((item) => {  
    selectHTML += `<option>${item}</option>`; // выводим значения в опшн, отображаем 
  });
  
}

renderexampleJsonFile(exampleJsonFile);

dropList.innerHTML = selectHTML; // отображаем товый массив в datalist
console.log(typeof selectHTML)

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

const dropOption = document.querySelectorAll("option")

dropInput.addEventListener("input", (e) => {
  [...dropOption].forEach(item => {
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


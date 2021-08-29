const container = document.querySelector(".container");
const clear = document.querySelector(".clear");
const eraser = document.querySelector(".eraser");
const pen = document.querySelector(".pen");
const slider = document.querySelector(".slider");
const color = document.querySelector(".color");
height = "500px";
width = "500px";
container.style.height = height;
container.style.width = width;
let newBox;
let newBoxes;

defaultResolution();
slider.addEventListener("input", resolution);

color.addEventListener("input",() => console.log(color.value));

clear.onclick = function () {
    newBoxes.forEach((element) => element.style.backgroundColor = "#f7f3d6");
}

eraser.onclick = function () {
    newBoxes.forEach((newBox) => newBox.addEventListener("mouseover", () => newBox.style.backgroundColor = "#f7f3d6"));
}

pen.onclick = function () {
    newBoxes.forEach((newBox) => newBox.addEventListener("mouseover", () => newBox.style.backgroundColor = color.value));
}

function EventListenerAdder(){
    newBoxes = document.querySelectorAll(".box");
    newBoxes.forEach((newBox) => newBox.addEventListener("mouseover", () => newBox.style.backgroundColor = color.value));
}

function defaultResolution(){
    adjustGridSize(10);
    for( let i =0;i< 10**2 ; i++){
        newBox = document.createElement("div");
        newBox.classList.add("box");
        container.appendChild(newBox);
    }
    EventListenerAdder();
}

function resolution(e){
    clearpad();
    adjustGridSize(e.target.value);
    for( let i =0;i<e.target.value**2;i++){
        newBox = document.createElement("div");
        newBox.classList.add("box");
        container.appendChild(newBox);
    }
    EventListenerAdder();
}

function clearpad() {
    newBoxes.forEach((element) => element.remove());
    return 0;
}

function adjustGridSize(sliderValue){
    sliderValue;
    container.style.gridTemplateColumns = `repeat(${sliderValue}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${sliderValue}, 1fr)`;
}
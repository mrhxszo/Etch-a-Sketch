const container = document.querySelector(".container");
const clear = document.querySelector(".clear");
const eraser = document.querySelector(".eraser");
const pen = document.querySelector(".pen");
const slider = document.querySelector(".slider");
const color = document.querySelector(".color");
const rainbow = document.querySelector(".rainbow");
const pixels = document.querySelector(".pixels")
const greyscale = document.querySelector(".greyscale");
height = "500px";
width = "500px";
container.style.height = height;
container.style.width = width;
let newBox;
let newBoxes;
let box = [];

defaultResolution();
slider.addEventListener("input", resolution);

clear.onclick = function (e) {
    newBoxes.forEach((element) => element.style.backgroundColor = "#f7f3d6");
    for(let i=0; i<box.length; i++){
        box[i] = 0;
    }
}

eraser.onclick = function () {
    newBoxes.forEach((newBox) => newBox.addEventListener("mouseover", () => newBox.style.backgroundColor = "#f7f3d6"));
    let currentMode = "eraser";
    buttonColor(currentMode);
}

pen.onclick = function () {
    newBoxes.forEach((newBox) => newBox.addEventListener("mouseover", () => newBox.style.backgroundColor = color.value));
    let currentMode = "pen";
    buttonColor(currentMode);
}

rainbow.onclick = function (e) {
    console.log(e);
    newBoxes.forEach((newBox) => newBox.addEventListener("mouseover", function rainbowfunc(){
        let red = Math.random()*100;
        let green = Math.random()*100;
        let blue = Math.random()*100;
        newBox.style.backgroundColor = `rgb(${red}%,${green}%,${blue}%)`
    }));
    let currentMode = "rainbow";
    buttonColor(currentMode);
}

greyscale.onclick = function () {
    newBoxes.forEach((i) => i.removeEventListener("mouseover", function rainbowfunc(){
        let red = Math.random()*100;
        let green = Math.random()*100;
        let blue = Math.random()*100;
        i.style.backgroundColor = `rgb(${red}%,${green}%,${blue}%)`
    }));
    let arr = [];
    let a = 0;
    let b= 0;
    newBoxes.forEach(() => box.push(0.1));
    newBoxes.forEach(() => arr.push(a +=1 ));
    newBoxes.forEach((i) => {
        greyScale(i, arr.indexOf(b += 1));
    });
    let currentMode = "greyscale";
    buttonColor(currentMode);
}



function greyScale(i, a){
    i.onmouseover = function () {
        //   if(box[a] >= 1){
        //     return;
        // }
        let newcolor = hexToRgb(`${color.value}`);
        newBoxes[a].style.backgroundColor = `rgba(${newcolor[0]},${newcolor[1]},${newcolor[2]}, ${box[a]})`;
        box[a] +=0.15;
    }
}

function buttonColor(currentMode){
    console.log(currentMode);
    switch (currentMode){
        case 'eraser':
            if (eraser.classList.contains("buttonpressed")== true){
                return;
            }
            eraser.classList.add("buttonpressed");
            pen.classList.remove("buttonpressed");
            rainbow.classList.remove("buttonpressed");
            greyscale.classList.remove("buttonpressed");
            break;
        case'pen':
            if (pen.classList.contains("buttonpressed")== true){
                return;
            }
            eraser.classList.remove("buttonpressed");
            pen.classList.add("buttonpressed");
            rainbow.classList.remove("buttonpressed");
            greyscale.classList.remove("buttonpressed");
            break;
        case("rainbow"):
            if (rainbow.classList.contains("buttonpressed")== true){
                return;
            }
            eraser.classList.remove("buttonpressed");
            pen.classList.remove("buttonpressed");
            rainbow.classList.add("buttonpressed");
            greyscale.classList.remove("buttonpressed");
            break;
        case("greyscale"):
            if (greyscale.classList.contains("buttonpressed")== true){
                return;
            }
            eraser.classList.remove("buttonpressed");
            pen.classList.remove("buttonpressed");
            rainbow.classList.remove("buttonpressed");
            greyscale.classList.add("buttonpressed");
            break;

    }
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
    pixels.textContent = `${slider.value} x ${slider.value} boxes`;
}

function hexToRgb(hex) {
    hex = hex.replace(/[^0-9A-F]/gi, '');
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return [(r),(g),(b)];
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
    pixels.textContent = `${slider.value} x ${slider.value} px`;
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
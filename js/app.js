console.log("app.js started");

import Button from "./button.js";
import Image from "./imagen.js";
import Sound from "./sound.js";

let myDiv1 = document.querySelector("#myApp");

let myButton = new Button("click me!");
let myImagen = new Image("escudo", "./data/river.jpg");
let mySound = new Sound("https://www.w3schools.com/html/horse.ogg");

myDiv1.innerHTML = myButton.render();
myDiv1.innerHTML += myImagen.render();
myDiv1.innerHTML += mySound.render();
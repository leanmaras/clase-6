console.log("app.js started");

import Button from "./button.js";
import Image from "./imagen.js";
import Sound from "./sound.js";
import List from "./list.js";

let myDiv1 = document.querySelector("#myApp");

let myButton = new Button("click me!");
let myImagen = new Image("escudo", "./data/river.jpg");
let mySound = new Sound("https://www.w3schools.com/html/horse.ogg");

const listItems = ["item 1", "item 2", "item 4", "item 5", "item 3"];
let myList = new List(listItems);

myDiv1.innerHTML = myButton.render();
myDiv1.innerHTML += myImagen.render();
myDiv1.innerHTML += mySound.render();
myDiv1.innerHTML += myList.render();
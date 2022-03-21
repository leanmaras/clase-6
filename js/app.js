import Button from "./button.js";

let myDiv1 = document.querySelector("#myButton");

let myButton = new Button("click me!");

myDiv1.innerHTML = myButton.render();

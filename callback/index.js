"use strict";

// event listener call back function

let clicked = false;
window.addEventListener("load", function () {
	document.getElementById("click-me").addEventListener("click", function () {
		clicked = !clicked;
		console.log("Button wurde geklickt");
	})
});

// time interval call back function

let counter = 0;
setInterval(function () {
	if (clicked) {
		console.log(counter++);
	}
}, 1000);

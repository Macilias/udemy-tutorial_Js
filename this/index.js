"use strict";

class Person {

	constructor(firstname) {
		this.firstname = firstname;
	}

	testThis() {
		console.log("this: ", this);
	}

	callbackOldWay() {
		let _this = this;
		setTimeout(function () {
			console.log("callback old", this);
			console.log("callback old", _this);
		})
	}

	callbackNewWay() {
		let _this = this;
		setTimeout(() => {
			console.log("callback old", this);
			console.log("callback old", _this);
		})
	}
}

// Das this is in JS jeweils das, was vor dem Punkt steht
let max = new Person("Max");
// hier max
max.testThis();
// hier nix
let test = max.testThis;
test();

// die alter schreibweise brauchte einen expilizeten Verweis auf das this in Form einer variablen
max.callbackOldWay();
// die neue "vererbt" das this an den "phat arrow"
max.callbackNewWay();





































"use strict";

// eindimensionale arrays

let persons = ["Erik", "Monika"];

// add to end:
persons.push("Xavier");
// add to front:
persons.unshift("Andreas");
console.log(persons);
// remove from end:
let removedPerson = persons.pop();
console.log("removing", removedPerson);
// remove from front:
removedPerson = persons.shift();
console.log("removing", removedPerson);
console.log(persons);

// mehrdimensionale arrays

let multidim = [
	["Andreas", "Paula"],
	["Eirc", "Monika"],
];
console.log(multidim);
console.log(multidim[0][0]);

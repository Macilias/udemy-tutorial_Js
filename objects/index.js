"use strict";

class Person {

	constructor(firstname, lastname, age, gender) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.gender = gender;
		this.age = age;
		console.log("constrctor wurde aufgerufen");
	}

	printPerson() {
		return "Firstname: " + this.firstname + ", Lastname: " + this.lastname+ ", " +
			"Age: " + this.age + ", Gender: " + this.gender;
	}
}

class Student extends Person {
	constructor(firstname, lastname, age, gender, subject) {
		super(firstname, lastname, age, gender);
		this.subject = subject;
		console.log("constrctor wurde aufgerufen");
	}

	printPerson() {
		return super.printPerson() + ", Subject: " + this.subject;
	}

	enroll() {
		console.log("enroll()");
	}
}

class Teacher extends Person {

	teach() {
		console.log("teach()");
	}
}

let max = new Student("Max", "Mustermann", 24, "M", "Informatik");
max.firstname = "Maximiliam";
max.lastname = "Mustermann";
max.age = "25";
max.gender = "M";
console.log(max.printPerson());
max.enroll();

let erica = new Person("Erica", "Mustermann", 23, "W");
console.log(erica.printPerson());

let egon = new Teacher("Egon", "Sauer", 66, "M");
console.log(egon.printPerson());
egon.teach();

let peter = new Person();
console.log(peter.printPerson());











































// OHNE CLASS
// let person = {
// 	firstname: "Max",
// 	age: 24,
// 	printPerson: function() {
// 		console.log("IN  Firstname: " + this.firstname + ", Age: " + this.age + ", Gender: " + this.gender);
// 	}
// };
// console.log(person);
//
// delete person.age;
// console.log(person);
//
// person.age = 25;
// console.log(person);
//
// person.gender = "M";
// console.log(person);
// console.log(person.gender);
// let gender = "gender";
// console.log(person[gender]);
//
//
// // Funktionen auf Objekten
// let printPerson = function(p) {
// 	console.log("OUT Firstname: " + p.firstname + ", Age: " + p.age + ", Gender: " + p.gender);
// };
// printPerson(person);
//
// // Funktionen in Objekten
// person.printPerson();

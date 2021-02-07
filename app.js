"use strict";
var aString;
aString = "hi";
aString = 'hello';
var arrMix = ['hello', 2, 'yo']; //here it doesn't matter where you place the string or the number in the array
var arrTuple = ['yo yo', 2,]; //here it does matter where you place the string and the number, it has to be in the right order
var person = {
    name: 'jef',
    age: 22,
    email: ''
};
person.email = 'max@max.com';
var year;
year = 2012;
year = 'two thousand';
//optional values
var calcSum; //c is optional because of the question mark
calcSum = function (first, second) {
    return first + second;
};
calcSum(2, 5);
var Person = {
    name: 'Jean',
    age: 29
};
var Person2 = /** @class */ (function () {
    function Person2(name, age) {
        this.name = name;
        this.age = age;
    }
    Person2.prototype.greet = function () {
        return "Hi, my name is " + this.name + " and I am " + this.age + " years old";
    };
    return Person2;
}());
var jefke = new Person2('Jefke', 28);
console.log(jefke);
var Person3 = /** @class */ (function () {
    function Person3(name, age) {
        this.name = name;
        this.age = age;
    }
    Person3.prototype.greet = function () {
        return "Hi, my name is " + this.name + " and I am " + this.age + " years old";
    };
    return Person3;
}());
//DOM elements
var inputName = document.querySelector('#name'); //this is typecasting: if we assign it as an html element, we will have intellisense on this variable
var inputAge = document.querySelector('#age');
var greeting = document.querySelector('.greeting');
var form = document.querySelector('form'); // if you add an exclamation mark at the end, typescript will know that there is an element, otherwise typescript might think the value is null
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (e) {
    e.preventDefault();
    var person = new Person3(inputName.value, inputAge.valueAsNumber);
    greeting.innerText = person.greet();
    form.reset();
});
console.log(inputName.value);
//Generics
function doSomethingGeneric(arg) {
}
//Enums
var manufacturerCar;
(function (manufacturerCar) {
    manufacturerCar[manufacturerCar["Tesla"] = 0] = "Tesla";
    manufacturerCar[manufacturerCar["Audi"] = 1] = "Audi";
    manufacturerCar[manufacturerCar["BMW"] = 2] = "BMW";
})(manufacturerCar || (manufacturerCar = {})); //enums are basically like indexes, if 
var myCar = {
    year: 2021,
    make: manufacturerCar.BMW //this is gonna output 2, cause bmw is on the 2nd index
};
console.log(myCar.make);

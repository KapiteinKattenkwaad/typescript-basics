let aString: string;
aString = "hi"

aString = 'hello'

let arrMix: (string | number)[] = ['hello', 2, 'yo']; //here it doesn't matter where you place the string or the number in the array

let arrTuple: [string, number] = ['yo yo', 2, ] //here it does matter where you place the string and the number, it has to be in the right order

let person = {
    name: 'jef',
    age: 22,
    email: ''
}

person.email = 'max@max.com'
//person.newvalue = 'hello' //won't work, you have to declare it in your object first


//custom types
type stringOrNum = string | number;

let year: stringOrNum;
year = 2012
year = 'two thousand'

//optional values

let calcSum: (a: number, b: number, c?: number) => number  //c is optional because of the question mark
calcSum = (first: number, second: number) => {
    return first + second
}

calcSum(2,5)

//interfaces: define an interface and then apply that interface to your new variable

interface PersonInterface {
    name: String,
    age: Number
}

let Person: PersonInterface = {
    name: 'Jean',
    age: 29
}

class Person2 implements PersonInterface {
    name: String; //private makes it only accesible to this function, you can't use it outside of it.
    age: Number;
    constructor (name: String, age: Number) {
        this.name = name;
        this.age = age
    }
    greet() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old` 
    }
}

let jefke = new Person2('Jefke', 28)

console.log(jefke)

class Person3 implements PersonInterface {
    constructor(public name: String, public age: Number) {

    }
    greet() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old` 
    }
}


//DOM elements

const inputName = document.querySelector('#name') as HTMLInputElement //this is typecasting: if we assign it as an html element, we will have intellisense on this variable
const inputAge = document.querySelector('#age') as HTMLInputElement 
const greeting = document.querySelector('.greeting') as HTMLDivElement 
const form = document.querySelector('form')! // if you add an exclamation mark at the end, typescript will know that there is an element, otherwise typescript might think the value is null

form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const person = new Person3(inputName.value, inputAge.valueAsNumber);
    greeting.innerText = person.greet()
    form.reset()

})

console.log(inputName.value)

//Generics

function doSomethingGeneric<T>(arg: T) { //we use the T here (or any other letter) to say that we don't know what kind of type T will be

}


//Enums

enum manufacturerCar { Tesla, Audi, BMW } //enums are basically like indexes, if 

const myCar = {
    year: 2021,
    make: manufacturerCar.BMW  //this is gonna output 2, cause bmw is on the 2nd index
}

console.log(myCar.make)
// write a variable that is a string and output to console (hint: it's console.log(variable name))

let string = "Welcome to Javascript 2025!";
console.log(string);
 
// write a variable that is a number and output to console (hint: it's console.log(variable name))

let number = 123456789;
console.log(number);

// write a variable that takes any two numbers and adds them

let addThem = addition1 + addition2;

let addition1 = 1;
let addition2 = 2; 

// write a variable that takes any two numbers and subtracts them and output to console

let subtractThem = subtraction1 - subtraction2;

let subtraction1 = 6;
let subtraction2 = 4;

console.log(subtractThem);

// write a variable that takes any two numbers and performs a modulo that has a value of 1 and output to console 

let moduloThem = modulo1 % modulo2;

let modulo1 = 5;
let modulo2 = 2;

console.log(moduloThem);

// write a variable that takes any two numbers and perform an exponential value and output to console 

let exponentThem = exponential1 ** exponential2;

let exponential1 = 5
let exponential2 = 3

console.log(exponentThem);

// write a statement that is false using a conditional statement and output to console 

let trueNumber = 10;

if(trueNumber < 5){
    console.log("False doesn't exist");
}

else{
    console.log("False does exist");
}

// I have created an object below, output to console the value of "breed" (hint: the structure is ObjectName.value you want to call)
// the keyword "this" is self referencing the object 

let siggy = {
    breed : "cat", 
    baby: "big baby", 
    fluffy: "fluffy", 
    output: function() {

        return `Siggy is a ${this.breed} that is a ${this.fluffy} ${this.baby}`

    }
}

console.log(siggy.breed);

// methods! You call methods the same way you call a function.  I'll call siggy.output() below. 

console.log(siggy.output()); 

// copy + paste the siggy object below and rename the variable from Siggy to an animal or name of your choice 
// then, I want you to change the object to the value of your choosing  

let rosalina = {
    species: "tuxedo cat", 
    age: "adult", 
    description: "beautiful female lady", 
    output: function() {

        return `Rosalina is an ${this.age} ${this.species}. She is a ${this.description} and lives in the house.`

    }
}

// console.log the values of that object one by one. 

console.log(rosalina.species);
console.log(rosalina.age);
console.log(rosalina.description);
console.log(rosalina.output());

// create an array 

let array = ["A", "B", "C", "D", "E", "F"];

// call the value in the 3 position of this array and output to console 

let someArray = ["Ishrat", "Is", "Really", "Proud", "Of", "You"]
let someArray3rdPosition = someArray.at(2);

console.log(someArray3rdPosition);

// call all values in the array using a loop 

for(let i = 0; i < someArray.length; i++){
    text += someArray[i] + "<br>";

}

// what is the value of the variable ifStatement, leave your answer in the console. 

let ifStatement; 
let value = 5; 

if(value < 5)
    {
        ifStatement = true;
}

else{
    ifStatement = false; 
}

console.log("The value of the variable ifStatment is 5");
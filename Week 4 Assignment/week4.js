// write a variable that is a string and output to console (hint: it's console.log(variable name))

console.log("Welcome to Javascript!");

// write a variable that is a number and output to console (hint: it's console.log(variable name))

console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// write a variable that takes any two numbers and adds them 

console.log(1 + 2);

// write a variable that takes any two numbers and subtracts them and output to console

console.log(6 - 4);

// write a variable that takes any two numbers and performs a modulo that has a value of 1 and output to console

console.log(5 % 2);

// write a variable that takes any two numbers and perform an exponential value and output to console

console.log(5 ** 3);

// write a statement that is false using a conditional statement and output to console 

if(false) {
    console.log("False doesn't exist.");
    
}
else {
    console.log("False does exist.");

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
    breed: "tuxedo cat", 
    description: "beautiful and playful female", 
    age: "adult", 
    output: function() {

        return `Rosalina is a ${this.breed}. She is an ${this.age} and ${this.description}.`

    }
}

// console.log the values of that object one by one. 

console.log(rosalina.breed);
console.log(rosalina.description);
console.log(rosalina.age);
console.log(rosalina.output())

// create an array

let array = ["A", "B", "C", "D", "E", "F"];

// call the value in the 3 position of this array and output to console 

let someArray = ["Ishrat", "Is", "Really", "Proud", "Of", "You"]

console.log(someArray[2])

// call all values in the array using a loop 

for (let x in someArray) {
    console.log(someArray[x])
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

console.log("The value of the variable ifStatement is 5.")
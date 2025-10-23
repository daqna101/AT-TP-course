// Functions

function displayPersonalData(name: string, age: number) {
  return `${name} is ${age} years old`;
}

displayPersonalData("Ivan", 20);

// const personalData: string = displayPersonalData("Petar", 25);
// console.log(personalData);

function greetingVoid() {
  console.log("This function is type void"); // void -> function that doesn't return anything
}

function devideNums(numOne: number, numTwo: number): number {
  return numOne / numTwo;
}
// devideNums(10, 5);
// devideNums(50, 5);

// arrow function
const sumNums = (a: number, b: number): number => a + b;
sumNums(3, 2);

// function with optional parameter

function greeting(name: string, age?: number) {
    if (age) {
        return `${name} is ${age} years old`; 
    }
   return `Hello ${name}`;
}
console.log(greeting("Todor"));
console.log(greeting("Todor", 30));

// default parameters

function subNums(numOne: number = 10, numTwo: number = 5) {
    console.log(numOne - numTwo);
}
// subNums(50, 30);


// function with union types

function printId(id: string | number) {
  console.log(`id - ${id} is type of ${typeof id}`)
}
printId("#10");
printId(10);
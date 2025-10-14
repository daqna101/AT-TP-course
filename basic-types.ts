// let vs const
let num: number = 5;
num = 10;
num = 15;

const welcomeMssg: string = "Welcome";
// Cannot assign to 'welcomeMssg' because it is a constant.
// welcomeMssg = "Welcome, Peter!"

// string
let message: string = "Hello, Peter!";

let messageLenght: number = message.length;

// string interpolation
let welcomeMessageDetails = `Text message lenght is ${messageLenght}`;
// console.log(welcomeMessageDetails);

// number and number operations

let numOne: number = 10;
let numTwo: number = 5;

let add: number = numOne + numTwo;
let subs: number = numOne - numTwo;
let multiply: number = numOne * numTwo;
let devide: number = numOne / numTwo;

// boolean (true/false)
let areEqual: boolean = numOne === numTwo;
let isGreaterOrEqual: boolean = numOne >= numTwo;

// logical operators
let areEqualTo: boolean = numOne === 10 && numTwo === 5;
let isAnyNumEqualTo: boolean = numOne === 10 || numTwo === 6;

// conditions

// ternary operastor
let positiveNumComparison: string =
  numOne > 0
    ? `The number ${numOne}is positive`
    : `The number ${numOne} is negative`;

// if/else statement

const numberThree: number = 100;
if (numberThree <= 10) {
  console.log("The number is less or equal to 10");
} else if (numberThree > 110) {
  console.log("The number is not greater than 110");
} else if (numberThree > 50) {
  console.log("The number is greater than 50");
} else {
  console.log("The number is not greater than 3");
}

const name: string = "Dayana Alexandrova";
let age: number = 30;

console.log('Hello my name is ' + name + ' and I am ' + age  +' years old.');

let num1: number = 50;
let num2: number = 15;

let subsNum= num1 - num2; 

console.log(subsNum);

let numericV: number = 50;
let isWithinRange: boolean = (numericV <= 45 || numericV >= 60);

if (isWithinRange==true) {
    console.log('The number ' + numericV + ' is within the range');
} else {
    console.log('The number ' + numericV + ' is not within the range');
}
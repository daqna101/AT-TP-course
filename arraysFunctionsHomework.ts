//add string at the last position of the array
let addName: string[] = ['Dayana', 'Yoana', 'Alina'];
addName.push('Emily');

console.log(addName);

//remove the first number from the array
let removeFirstNum: number [] = [0, 5, 10, 15, 20];
removeFirstNum.shift();

console.log(removeFirstNum);

//new array divided by 2
let originalNum: number [] = [4, 8, 10, 20];
let devidedByTwo: number [] = originalNum.map((num) => num / 2);
console.log(devidedByTwo);

//filter numbers grater than 5
let mixedNums: number [] = [0, 1, 2, 3, 10, 6, 5, 20];
let filteredNums: number [] = mixedNums.filter((num)=> num > 5);
console.log(filteredNums);

// sort in ascending order
let unsortNums: number [] = [20, 50, 10, 40, 100, 0];
let sortedNums: number [] = unsortNums.sort((a, b)=> a - b);
console.log(sortedNums);

//splice to remove the second and third elements
let unsplicedArray: string [] = ['car', 'bike', 'bus', 'train','boat'];
let splicedArray= unsplicedArray.splice(1, 2);
console.log(splicedArray);

// function -> find the the largest num in the array
function findLargest (numOne: number, numTwo: number, numThree: number): number | string {
if (numOne > numTwo && numOne > numThree) {
    return numOne;
} else if (numTwo > numOne && numTwo > numThree) {
    return numTwo;
} else if (numThree > numTwo && numOne > numOne){
    return numThree;
} else {
    return 'The numbers are equal';
}
}
console.log(findLargest (0, 100, 99));

// inches to cm
function convertToCentimeters (inches: number= 10) {
    let convertedNum: number = inches * 2.54;
    console.log(`Inches is ${inches} and in centimeters is ${convertedNum}`);
}

// required + optional parameter
function calculateArea (width: number, height?: number) {
    if (height== undefined) {
        let shapeType: string = 'square';
        let squareArea: number = width * width;
        console.log(`Height is not defined. This is a ${shapeType}. The area of the shape is ${squareArea}.`);
        return;
    }
    console.log(`The area of the shape is ${width * height}`);
}
//calculateArea (5);
calculateArea (5,8);
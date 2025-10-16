// arrays declaration
let arrayNumber: number[] = [1, 2, 3, 4];
let arraysStr: string[] = ["Pesho", "Gosho", "Tosho", "Ivan"];
let combinedArray: (string | number)[] = [1, "Pesho", 2, "Ivan"];

// acceess element by index
arraysStr[0];
arraysStr[1];
combinedArray[2];

// console.log(arraysStr[0]);

arrayNumber.length;

// map method

let multiplyNums = arrayNumber.map((num: number) => num * 2);
let mapNames = arraysStr.map((currentName: string) => `Hello ${currentName}`);
let checkTypeOf = combinedArray.map((element: number | string) => {
   if (typeof element === "number") {
        return element + 5;

    } else {
        return `Welcome ${element}`;
    }
});
// console.log(checkTypeOf);

let positiveNums: number[] = [2,3,4,5,6];
let filterPositiveNums: number[] = positiveNums.filter((nums: number) => nums > 3 && nums < 6);
//console.log(filterPositiveNums)

// sort method
let sortNums: number[] = [100, 2, 30, 5, 40, 6];
let sortedResult = sortNums.sort((a: number, b: number) => b - a);  //descending order or (a-b) for ascending order
// console.log(sortedResult); 
// console.log(arraysStr.sort()); // only empty () as by default is reading as strings

// method push
sortedResult.push(200);

// method pop
sortNums.pop();

// shift method
sortedResult.shift();

// unshift method
sortedResult.unshift(1);
console.log(sortedResult)


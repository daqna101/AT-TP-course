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
console.log(checkTypeOf);

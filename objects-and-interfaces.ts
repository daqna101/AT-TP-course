// interface Car declaration

interface Car {
  type: string;
  model: string;
  color: string;
  horsePowers: number;
}

// Interface person declaration

interface Person {
  name: string;
  lastName: string;
  address: string;
  age: number;
  hobbies: string[];
  greeting: () => string;
  // greeting(): string;
}

// Object declaration

const car: Car = {
  type: "Fiat",
  model: "500",
  color: "white",
  horsePowers: 100,
};

//console.log(car);

// object with method and array value
const person: Person = {
  name: "Ivan",
  lastName: "Ivanov",
  address: "bul. Vitosha 30",
  age: 30,
  hobbies: ["football", "tennis", "hiking"],
  greeting: function () {
    return "Hello! My name is Ivan.";
  },
};
// properties access
person.name;
person.hobbies[1];
person["address"];

// dynamic
// const key = "age",
// const testObj = { name: "Pesho", age: 25};
// console.log(testObj[key]);

person.greeting();
person["greeting"]();

// properties redeclaration
person.age = 35;
console.log(person);

// let vs const

let dog = { name: "SparK" };
dog.name = "Bobb";
dog = { name: "Nik" };

// const cat = { name: "Lusi"};
// cat.name = "Kitty";
// cat = {name: "Tom", age: 20}

//  explicit object type
const mouse: { name: string; favFood: string; age: number } = {
  name: "Jerry",
  favFood: "cheese",
  age: 2,
};

// Interfaces - optional properties, read only and string literals

interface User {
  name: string;
  readonly email: string;
  role: string;
  job?: string;
  password?: string | number;
}

const user: User = {
  name: "Tom",
  email: "tom@mail.com",
  role: "admin",
  job: "QA",
};
user.password = 324324;
console.log(user);
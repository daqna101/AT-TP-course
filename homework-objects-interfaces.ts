interface Person {
  name: string;
  lastName: string;
  age: number;
  email: string;
  phoneNumber: number;
}

interface PersonInfo extends Person {
  country?: string;
  greeting?: () => void;
}

const newPerson: Person = {
  name: "Dayana",
  lastName: "Alexandrova",
  age: 30,
  email: "dayanaalexandrova@email.com",
  phoneNumber: 76756765,
};

const person2: PersonInfo = {
  name: "Alina",
  lastName: "Todorova",
  age: 20,
  email: "alina.t@email.com",
  phoneNumber: 79978674,
  country: "Bulgaria",
  greeting() {
    console.log(`Hello ${this.name} ${this.lastName}`);
  },
};
console.log(newPerson);
console.log(person2);
person2.greeting?.();


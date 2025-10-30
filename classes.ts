// class declaration
class Person {
  //   name: string;
  //   age: number;

  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }

  introduction() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person("Petar", 30);
//person1.introduction();

//readonly access modifier
// class ReadonlyPersonData {
//   readonly name: string;
//   readonly age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   intro() : void {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`)
//   }
// }
// const person2 = new ReadonlyPersonData("Dayana", 20);
//console.log(person2.name);

//private modifier
// class PrivatePersonData {
//   private name: string;
//   private age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   private displaySecretMssg(): string {
//     return "This is a message from private method.";
//   }

//   intro() : void {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`)
//     console.log(this.displaySecretMssg());
//   }
// }

// const person3 = new PrivatePersonData ("Ani", 25);
// person3.name; --> private and cannot be accessible
//console.log(person3.intro());

//class inheritance

class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  intro(): void {
    console.log("Nice to meet you");
  }
}

class UserDetails extends User {
  constructor(name: string) {
    super(name);
  }
  showDetails(): void {
    console.log(`My name is ${this.name}`);
  }
}
const user = new UserDetails("Yoana");
console.log(user.name);
user.showDetails();
user.intro();

// protected access modifier

class ProtectedPerson {
//   protected name: string;
//   protected age: number;

  constructor(protected name: string, protected age: number) {
    this.name= name;
    this.age= age;
  }

  protected getProtectedData (): string {
    return`Protected name ${this.name} and protected ${this.age}`;
  }
}

class Student extends ProtectedPerson {
    private grade: number;

    constructor(name: string, age:number, grade: number) {
        super(name, age);
        this.grade = grade;
    }

    studentIntro():void {
        console.log(this.getProtectedData());
        console.log(`My name is ${this.name}. I am ${this.age} years old. I am in ${this.grade} grade`)
    }
}

const protectedPerson= new ProtectedPerson("Alina", 15);
// protectedPerson.name;

const student= new Student("Hristo", 25, 6);
console.log("<----> new test")
console.log(student.studentIntro());


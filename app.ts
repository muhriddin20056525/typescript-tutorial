// const fullName: string = "John Doe";
// let isMarried: boolean = true;
// let age: number = 20;

// import { Person } from "./app.types";

// console.log(fullName);
// console.log(isMarried);
// console.log(age);

// let fullName: string = "John Doe";
// const salary: number = 10000;
// const bonus: string = "5000";

// const totalSalary: number = salary + bonus;
// console.log(totalSalary);

// const isMarried: boolean = false;

// function getName(firstName: string, lastName: string): string {
//   return `hello ${firstName} ${lastName}`;
// }

// const person1 = getName("Muhriddin", "Davlatov");
// console.log(person1);

// const getAdult = (age: number): boolean => {
//   if (age > 18) {
//     return true;
//   }

//   return false;
// };

// const isAdult = getAdult(20);
// console.log(isAdult);

// const person = {
//   firstName: "Samar",
//   lastName: "Badriddinov",
//   city: "Tashkent",
//   skills: {
//     programming: "JavaScript",
//     design: "Figma",
//   },
// };

// function getName(data: { firstName: string; lastName: string }): string {
//   return `hello ${data.firstName} ${data.lastName}`;
// }

// const person1 = getName(person);
// console.log(person1);

// const cars: string[] = ["BMW", "Audi", "Mercedes"];
// const numbers: number[] = [12, 3, 4, 5, 6];

// const mixed: (string | number)[] = [1, "Hello", 2, "World"];

// const person: [string, number] = ["Samar Badriddinov", 22];

// person.push("sammi");

// console.log(person[0]);
// console.log(person[1]);

// let cordinate: [number, string | number] = [98, 12];

// function getInfo(): [string, number] {
//   return ["Samar Badriddinov", 24];
// }

// const logger = getInfo();

// const [fullName, age] = logger;

// console.log(fullName, age);

// let admins: readonly number[] = [1, 2, 3, 4, 5];

// let person: readonly [string, number] = ["John", 26];

// let numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];

// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// }

// enum Direction {
//   Up = 1,
//   Down = 2,
//   Left = 3,
//   Right = 4,
// }

// enum Direction {
//   Up = "UP",
//   Down = "DOWN",
//   Left = "LEFT",
//   Right = "RIGHT",
// }

// const move: Direction = Direction.Up;
// console.log(move);

// function getDirection(direction: Direction) {
//   if (direction === Direction.Up) {
//     return "Moving up";
//   } else if (direction === Direction.Down) {
//     return "Moving down";
//   } else if (direction === Direction.Left) {
//     return "Moving left";
//   } else if (direction === Direction.Right) {
//     return "Moving right";
//   }
// }

// const moveUp = getDirection(Direction.Up);
// console.log(moveUp);

// enum StatusCode {
//   OK = 200,
//   NOT_FOUND = 404,
//   INTERNAL_SERVER_ERROR = 500,
// }

// function handleRequest(url: string): StatusCode {
//   if (url == "/") return StatusCode.OK;

//   if (url == "/server-error") return StatusCode.INTERNAL_SERVER_ERROR;

//   return StatusCode.NOT_FOUND;
// }

// const homePage = handleRequest("/");
// console.log(homePage);

// enum Website {
//   Youtube = "Youtube",
//   Facebook = "Facebook",
//   Instagram = "Instagram",
//   Twitter = "Twitter",
// }

// let person: {
//   id: number;
//   name: string;
//   isMarried: boolean;
//   username: string;
//   email: string[];
//   address: {
//     street: string;
//     suite: string;
//     city: string;
//     zipcode: string | number;
//     geo: [number, number];
//   };
//   phone: number;
//   website: Website;
//   company: {
//     name: string;
//     catchPhrase: string;
//     bs: string;
//   };
// } = {
//   id: 2,
//   name: "Ervin Howell",
//   isMarried: false,
//   username: "Antonette",
//   email: ["Shanna@melissa.tv", "info@gmail.com"],
//   address: {
//     street: "Victor Plains",
//     suite: "Suite 879",
//     city: "Wisokyburgh",
//     zipcode: 905667771,
//     geo: [-43.9509, -34.4618],
//   },
//   phone: 12345674,
//   website: Website.Facebook,
//   company: {
//     name: "Deckow-Crist",
//     catchPhrase: "Proactive didactic contingency",
//     bs: "synergize scalable supply-chains",
//   },
// };

// let id: string | number = 1;
// id = "10";
// id = 3;
// id = true;

// function printId(id: string | number): void {
//   console.log(`The id is ${id}`);
// }

// printId(101);
// printId("10");
// printId(false);

// function getVal(value: string | number): string | number {
//   if (typeof value === "string") {
//     return value.toUpperCase();
//   } else if (typeof value === "number") {
//     return value.toFixed(2);
//   }

//   return `Unknown type: ${value}`;
// }

// console.log(getVal("Hello"));
// console.log(getVal(1));

// function logError(error: string | string[]) {
//   if (Array.isArray(error)) {
//     error.forEach((e) => console.log(e));
//   } else {
//     console.error(error);
//   }
// }

// logError("This is an error");
// logError(["Error 1", "Error 2"]);

// function logError(error: { message: string } | { error: string }) {
//   if ("message" in error) {
//     console.log("Message: ", error.message);
//   } else {
//     console.log("Error: ", error.error);
//   }
// }

// logError({ message: "Hello" });
// logError({ error: "This is error" });

// let data: (string | number)[] = ["BMW", 1, "Audi", 2];
// console.log(data);

// let statusMessage: "success" | "errror" | "loading" = "success";

// let code: 200 | 400 | 500 = 200;

// let isMarried: true = true;

// function getStatus(status: "success" | "error"): "success" | "error" {
//   if (status === "success") {
//     return "success";
//   }

//   return "error";
// }

// console.log(getStatus("success"));
// console.log(getStatus("error"));

// type ID = string | number;
// let userId: ID = 1;
// let productId: ID = "1";

// const user1: Person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   skills: ["HTML", "CSS"],
// };

// type Logger = (message: string) => string;

// const log: Logger = (message) => {
//   return message.toUpperCase();
// };

// console.log(log("Hello world"));

// type Person = {
//   firstName: string;
//   lastName: string;
// };

// type Employee = {
//   company: string;
//   role: string;
// };

// type CompanyWorker = Person & Employee;

// const worker1: CompanyWorker = {
//   firstName: "Muhriddin",
//   lastName: "Davlatov",
//   company: "Epam",
//   role: "Software Engineer",
// };

// type StringArray = string[];
// let names: StringArray = ["Ali", "Vali"];

// type Person = {
//   firstName: string;
//   lastName: string;
//   wife?: Person;
// };

// type PersonList = Person[];

// let persons: PersonList = [
//   { firstName: "Muhriddin", lastName: "Davlatov" },
//   { firstName: "Asilbek", lastName: "Davlatov" },
// ];

// interface Person {
//   readonly firstname: string;
//   readonly lastname: string;
//   age?: number;
// }

// let persons: Person[] = [
//   {
//     firstname: "Muhriddin",
//     lastname: "Davlatov",
//   },
//   {
//     firstname: "Asilbek",
//     lastname: "Davlatov",
//   },
// ];

// interface Person {
//   [key: string]: string | number;
// }

// const person: Person = {
//   name: "John",
//   age: 30,
// };

// function logger(text: string): void {
//   console.log(text);
// }

// logger("Hello World");

// let unusable: void;
// unusable = "123";

// function logger(text: string, callback: (message: string) => void) {
//   console.log(text);
//   callback("Logged " + text);
// }

// logger("Hello", (message) => {
//   return message;
// });

// interface Calc {
//   a: number;
//   b?: number;
// }

// function calc(data: Calc) {
//   if (!data.b) {
//     return data.a;
//   }
//   return data.a + data.b;
// }

// const result = calc({ a: 10, b: 21 });
// console.log(result);

// function logger(value: unknown) {
//   if (typeof value === "string") {
//     return value.toUpperCase();
//   } else if (typeof value === "number") {
//     return value.toFixed(2);
//   }
// }

// console.log(logger("Muhriddin"));
// console.log(logger(1));

// let value: unknown = 100;
// let string: string = value as string;

// let person: unknown = {
//   name: "John",
//   age: 20,
// };

// if (typeof person === "object") {
//   const obj = person as { name: string; age: number };
//   console.log(obj.name);
// }

// function throwError(message: string): never {
//   throw new Error(message);
// }

// async function fetchData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/user");
//     if (!response.ok) {
//       throwError("No data found");
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     throwError("An error occured");
//   }
// }

// fetchData();

// let x: null = null;

// function logger(msg: string | null) {
//   if (msg !== null) {
//     console.log(msg.toUpperCase());
//   }

//   console.log("No message provided");
// }

// logger("Hello World");
// logger(null);

// let username: string | null = null;

// let showUsername = username ?? "Guest";

// let message: unknown = "Hello World";

// let strLength1: number = (<string>message).length;
// console.log(strLength1);

// let strLength2: number = (message as string).length;

// function logger(message: string | number) {
//   if (typeof message === "string") {
//     return message.toUpperCase();
//   } else {
//     return message;
//   }
// }

// class Dog {
//   bark() {
//     console.log("Woof");
//   }
// }

// class Cat {
//   meaw() {
//     console.log("Meow");
//   }
// }

// function makeSound(animal: Dog | Cat) {
//   if (animal instanceof Dog) {
//     animal.bark();
//   } else {
//     animal.meaw();
//   }
// }

// makeSound(new Dog());
// makeSound(new Cat());

// type Car = { speed: number };
// type Plane = { altitude: number };

// function getInfo(vehicle: Car | Plane) {
//   if ("speed" in vehicle) {
//     console.log(`Speed: ${vehicle.speed} km/h`);
//   } else {
//     console.log(`Altitude ${vehicle.altitude} metres`);
//   }
// }

// getInfo({ speed: 100 });
// getInfo({ altitude: 10000 });

// function logNumber(value: unknown): asserts value is number {
//   if (typeof value !== "number") {
//     throw new Error(`value is not a number`);
//   }
// }

// const age: unknown = 20;

// logNumber(age);
// console.log(age + 10);

// Interfaces

// enum Role {
//   ADMIN,
//   STUDENT,
// }

// interface IUser {
//   id: number;
//   name: string;
//   role: Role;
// }

// interface ICourse {
//   id: number;
//   title: string;
//   description: string;
//   students: IUser[];
// }

// // Role Checking

// function isAdmin(user: IUser): user is IUser & { role: Role.ADMIN } {
//   return user.role === Role.ADMIN;
// }

// // Courses List
// const courses: ICourse[] = [];

// // Add course

// function addCourse(user: IUser, course: ICourse) {
//   if (isAdmin(user)) {
//     courses.push(course);
//     console.log(`Course added ${course.title}`);
//   } else {
//     console.log(`Only admin can add course`);
//   }
// }

// // Enroll student

// function enrollStudent(user: IUser, courseId: number) {
//   const course = courses.find((course) => courseId === course.id);

//   if (!course) {
//     console.log("Course not found");
//     return;
//   }

//   if (user.role === Role.STUDENT) {
//     course.students.push(user);
//     console.log(`Student enroll ${user.name}`);
//   } else {
//     console.log("Only student enroll");
//   }
// }

// // Student list

// function listStudent(user: IUser, courseId: number) {
//   if (!isAdmin(user)) {
//     console.log("Only admin can see list student");
//     return;
//   }

//   const course = courses.find((course) => course.id === courseId);

//   if (!course) {
//     console.log("Course not found");
//     return;
//   }

//   console.log(
//     `Students in ${course.title}: ${course.students
//       .map((c) => c.name)
//       .join(", ")}`
//   );
// }

// // Practise

// const admin: IUser = { id: 1, name: "Admin", role: Role.ADMIN };
// const student1: IUser = { id: 2, name: "Ali", role: Role.STUDENT };
// const student2: IUser = { id: 3, name: "Osman", role: Role.STUDENT };

// const course: ICourse = {
//   id: 101,
//   title: "Math",
//   description: "Math course",
//   students: [],
// };

// // Call functions

// addCourse(admin, course);

// enrollStudent(student1, course.id);
// enrollStudent(student2, course.id);

// listStudent(admin, course.id);

// console.log(courses);

class Car {
  name: string;
  year: Date;

  constructor(name: string, year: Date) {
    this.name = name;
    this.year = year;
  }
}

const toyota = new Car("Toyota", new Date("2001-11-01"));
console.log(toyota);

const chevrolet = new Car("Chevrolet", new Date("2005-10-23"));

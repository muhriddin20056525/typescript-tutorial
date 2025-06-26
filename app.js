"use strict";
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
// class Car {
//   name!: string;
//   year!: Date;
//   constructor(name: string, year: Date);
//   constructor(data: { name: string; year: Date });
//   constructor(nameOrData: string | { name: string; year: Date }, year?: Date) {
//     if (typeof nameOrData === "string") {
//       this.name = nameOrData;
//       this.year = year!;
//     } else if (typeof nameOrData === "object") {
//       this.name = nameOrData.name;
//       this.year = nameOrData.year;
//     }
//   }
// }
// const toyota = new Car("Toyota", new Date("2001-11-01"));
// const chevrolet = new Car({ name: "Chevrolet", year: new Date("2001-11-01") });
// class Person {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   greeting(age: number): string {
//     return `Hello ${this.name} your age ${age}`;
//   }
// }
// const user1 = new Person("Muhriddin");
// console.log(user1.greeting(20));
// enum Provider {
//   PAYME,
//   CLICK,
//   UZUM,
// }
// enum Status {
//   PENDING,
//   APPROVED,
//   REJECTED,
// }
// class Payment {
//   id: Provider;
//   status: Status;
//   createdAt: Date;
//   updatedAt: Date;
//   providers: string[];
//   constructor(id: Provider) {
//     this.id = id;
//     this.status = Status.PENDING;
//     this.createdAt = new Date();
//     this.updatedAt = new Date();
//     this.providers = [];
//   }
//   getLifeTime() {
//     return new Date().getTime() - this.createdAt.getTime();
//   }
//   rejectPayment(): void {
//     if (this.status == Status.APPROVED) {
//       throw new Error("Payment is already approved");
//     }
//     this.status = Status.REJECTED;
//     this.updatedAt = new Date();
//   }
//   getProviders(provider: string): void;
//   getProviders(providers: string[]): void;
//   getProviders(providerOrProviders: string | string[]): void {
//     if (typeof providerOrProviders === "string") {
//       this.providers.push(providerOrProviders);
//     } else {
//       this.providers = this.providers.concat(providerOrProviders);
//     }
//   }
// }
// const payme = new Payment(Provider.PAYME);
// payme.getProviders("Payme");
// console.log(payme.providers);
// payme.getProviders(["click", "uzum"]);
// console.log(payme.providers);
// class Employee {
//   _salary: number;
//   _password: string;
//   set salary(num: number) {
//     this._salary = num * 100;
//   }
//   get salary(): number {
//     return this._salary;
//   }
// }
// const john = new Employee();
// john.salary = 10;
// const salary = john.salary;
// console.log(salary);
// class Person {
//   private _name: string;
//   constructor(name: string) {
//     this._name = name;
//   }
//   get changeName(): string {
//     return this._name.toUpperCase();
//   }
//   set changeName(newName: string) {
//     if (newName.length < 3) {
//       throw new Error("Ism kamida 3 ta belgidan iborat bo'lishi kerak.");
//     }
//     this._name = newName;
//   }
// }
// const user = new Person("Ali");
// console.log(user.changeName);
// user.changeName = "Vali";
// console.log(user.changeName);
// interface Drivable {
//   startEngine(): void;
//   drive(speed: number): void;
// }
// interface Flayable {
//   fly(speed: number): void;
// }
// class Car implements Drivable, Flayable {
//   model: string;
//   constructor(model: string) {
//     this.model = model;
//   }
//   startEngine(): void {
//     console.log("Engine Started");
//   }
//   drive(speed: number): void {
//     console.log(`${this.model}: driving at ${speed} km/h`);
//   }
//   fly(speed: number): void {
//     console.log(`${this.model}: flying at ${speed} km/h`);
//   }
// }
// const toyota = new Car("Toyota");
// toyota.startEngine();
// toyota.drive(240);
// toyota.fly(230);
// const honda = new Car("Honda");
// honda.startEngine();
// honda.drive(240);
// honda.fly(569);
// class Animal {
//   id: number;
//   name: string;
//   constructor(name: string, id: number) {
//     this.name = name;
//     this.id = id;
//   }
//   speak() {
//     this.id = 10 * this.id;
//     console.log(`${this.name} makes a sound.`);
//   }
//   showInfo() {
//     console.log(`name: ${this.name}, id: ${this.id}`);
//   }
// }
// class Cat extends Animal {
//   constructor(name: string) {
//     const id = Math.random();
//     super(name, id);
//   }
//   override speak() {
//     super.speak();
//     console.log(`${this.name} meaws.`);
//   }
// }
// const cat = new Cat("Kitty");
// cat.speak();
// cat.showInfo();
// class Shape {
//   color: string;
//   constructor(color: string) {
//     this.color = color;
//   }
//   describe() {
//     console.log(`This is shape is ${this.color}`);
//   }
// }
// class Circle extends Shape {
//   radius: number;
//   constructor(color: string, radius: number) {
//     super(color);
//     this.radius = radius;
//   }
// }
// const circle = new Circle("red", 23);
// circle.describe();
// class User {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   sayHello() {
//     console.log(`Hello ${this.name}`);
//   }
// }
// class Payment {
//   amount: number;
//   constructor(amount: number) {
//     this.amount = amount;
//   }
//   pay() {
//     console.log(`You paid ${this.amount}`);
//   }
// }
// class UserWithPayment {
//   user: User;
//   payment: Payment;
//   constructor(user: User, payement: Payment) {
//     this.payment = payement;
//     this.user = user;
//   }
//   showInfo() {
//     this.user.sayHello();
//     this.payment.pay();
//   }
// }
// const userWithPayment = new UserWithPayment(new User("John"), new Payment(100));
// userWithPayment.showInfo();
// class Person {
//   protected age: number;
//   constructor(age: number) {
//     this.age = age;
//   }
// }
// class Employee extends Person {
//   public name: string;
//   private salary: number;
//   constructor(name: string, salary: number, age: number) {
//     super(age);
//     this.name = name;
//     this.salary = salary;
//   }
//   showBonus() {
//     return this.salary * 0.2;
//   }
//   showAge() {
//     return this.age;
//   }
// }
// const employee = new Employee("John Doe", 1000, 40);
// console.log(employee.name);
// console.log(employee.showBonus());
// console.log(employee.showAge());
// class Counter {
//   static count: number = 0;
//   private static secretKey: string = "123456";
//   title: string;
//   constructor(title: string) {
//     this.title = title;
//   }
//   static increment() {
//     this.count++;
//   }
//   static add(a: number, b: number) {
//     return a + b;
//   }
//   static getSecretKey() {
//     return this.secretKey;
//   }
//   getTitle() {
//     return this.title;
//   }
// }
// const c = new Counter("c1");
// console.log(c.title);
// Counter.increment();
// console.log(Counter.count);
// console.log(Counter.add(34, 56));
// class Parent {
//   static message: string = "Hello World";
// }
// class Child extends Parent {}
// console.log(Child.message);
// namespace MathHelper {
//   export function add(a: number, b: number): number {
//     return a + b;
//   }
// }
// console.log(MathHelper.add(10, 3));
// abstract class Animal {
//   constructor(public name: string) {}
//   abstract makeSound(): void;
//   move(): void {
//     console.log(`Moving ${this.name}`);
//   }
// }
// class Cat extends Animal {
//   makeSound(): void {
//     console.log("Meow! Meow!");
//   }
// }
// const cat = new Cat("Kitty");
// cat.move();
// cat.makeSound();
// class Person {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   greeting() {
//     console.log(`Hello ${this.name}`);
//   }
// }
// class Counter {
//   count: number = 0;
//   increment() {
//     console.log(this.count);
//     this.count++;
//   }
// }
// const c = new Counter();
// const incrementFn = c.increment.bind(c);
// incrementFn();
// incrementFn();
// incrementFn();
// incrementFn();
// class User {
//   name: string = "John";
//   log(this: User) {
//     console.log(this.name);
//   }
// }
// class Calculator {
//   value: number = 0;
//   add(num: number): this {
//     this.value += num;
//     return this;
//   }
//   subtract(num: number): this {
//     this.value -= num;
//     return this;
//   }
//   multiply(num: number): this {
//     this.value *= num;
//     return this;
//   }
//   getValue(): number {
//     return this.value;
//   }
// }
// const cacl = new Calculator();
// const result = cacl.add(5).subtract(3).multiply(2).getValue();
// console.log(result);
// function identity<T>(arg: T): T {
//   return arg;
// }
// identity<number>(5);
// identity<string>("sam");
// interface IUser {
//   name: string;
//   age: number;
// }
// const users: Array<IUser> = [{ name: "Muhriddin", age: 20 }];
// enum Roles {
//   ADMIN,
//   USER,
// }
// type UserRoles = Record<string, number>;
// const roles: UserRoles = {
//   sam: Roles.ADMIN,
//   john: Roles.USER,
// };
// console.log(roles);
// function identity<T, U>(val1: T, val2: U): [T, U] {
//   return [val1, val2];
// }
// const stringIdentity = identity<string, number>("Hello", 42);
// const numberIdentity = identity<number, string>(10, "Hello");
// const booleanIdentity = identity<boolean, number>(true, 42);
// interface Name {
//   name: string;
// }
// interface Age {
//   age: number;
// }
// interface Married {
//   isMarried: boolean;
// }
// function merge<T, U, K>(obj1: T, obj2: U, obj3: K): T & U & K {
//   return { ...obj1, ...obj2, ...obj3 };
// }
// const user = merge<Name, Age, Married>(
//   { name: "Jack" },
//   { age: 23 },
//   { isMarried: false }
// );
// interface IUser {
//   name: string;
// }
// function getFirstElement<T>(arr: T[]): T {
//   return arr[0];
// }
// const firstNumber = getFirstElement<number>([1, 2, 3]);
// const firstString = getFirstElement<string>(["a", "b", "c"]);
// const firstUser = getFirstElement<IUser>([{ name: "John" }, { name: "Jane" }]);
// interface Shape<T> {
//   radius: T;
// }
// function createShape<T>(val: T): Shape<T> {
//   return { radius: val };
// }
// const firstShape = createShape<number>(10);
// const secondShape = createShape<string>("10deg");
// interface IUser {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
// }
// interface IPost {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }
// async function fetchData<T>(endpoint: string): Promise<T> {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/${endpoint}`
//   );
//   if (!response.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   const data: T = await response.json();
//   return data;
// }
// async function getUsers() {
//   const users = await fetchData<IUser[]>("users");
//   users.forEach((c) => console.log(c.name));
// }
// async function getPosts() {
//   const posts = await fetchData<IPost[]>("posts");
//   posts.forEach((c) => console.log(c.title));
// }
// getPosts();
// type Pair<T, U> = [T, U];
// const pair1: Pair<number, string> = [1, "one"];
// const pair2: Pair<string, number> = ["one", 1];
// interface IUser<T, U> {
//   name: T;
//   showAge(age: U): void;
// }
// const user1: IUser<string, number> = {
//   name: "John",
//   showAge(age) {
//     console.log(`Name: ${this.name}, Age: ${age}`);
//   },
// };
// user1.showAge(25);
// function getLength<T extends { length: number }>(item: T): number {
//   return item.length;
// }
// console.log(getLength("Hello World"));
// function getProperty<T, K extends keyof T>(obj: T, key: K) {
//   return obj[key];
// }
// const user = {
//   id: 1,
//   name: "John Doe",
//   email: "john@gmail.com",
// };
// const userName = getProperty(user, "name");
// console.log(userName);
// interface HasId {
//   id: number;
// }
// const user = {
//   id: 1,
//   name: "John",
// };
// function getById<T extends HasId>(obj: T) {
//   return obj.id;
// }
// class Shape<T, U> {
//   private content: T;
//   radius: U;
//   constructor(content: T, radius: U) {
//     this.content = content;
//     this.radius = radius;
//   }
//   getValue(): T {
//     return this.content;
//   }
//   getRasius(): U {
//     return this.radius;
//   }
// }
// const shape = new Shape<string, number>("Hello", 20);
// shape.getValue();
// shape.getRasius();
// const shape2 = new Shape<number, string>(123, "42deg");
// shape2.getValue();
// const user = {
//   name: "John",
//   age: 30,
// };
// type UserType = typeof user;
// function logger(user: UserType) {
//   console.log(user);
// }
// logger(user);
// type IUser = {
//   name: string;
//   age: number;
//   isMarried: boolean;
// };
// type UserKeys = keyof IUser;
// function getUserKey(key: UserKeys) {
//   console.log(key);
// }
// getUserKey("age");
// const user = {
//   name: "John",
//   age: 30,
// };
// type UserKeys = keyof typeof user;
const config = {
    apiUrl: "https://example.com",
    port: 3000,
    debug: true,
};
function getConfigValue(key) {
    return config[key];
}
console.log(getConfigValue("apiUrl"));

// const fullName: string = "John Doe";
// let isMarried: boolean = true;
// let age: number = 20;

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

function getInfo(): [string, number] {
  return ["Samar Badriddinov", 24];
}

const logger = getInfo();

const [fullName, age] = logger;

console.log(fullName, age);

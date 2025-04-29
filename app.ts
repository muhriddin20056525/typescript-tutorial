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

const getAdult = (age: number): boolean => {
  if (age > 18) {
    return true;
  }

  return false;
};

const isAdult = getAdult(20);
console.log(isAdult);

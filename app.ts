// interface Prototype<T> {
//   clone(): T;
// }

// class Person implements Prototype<Person> {
//   constructor(
//     public name: string,
//     public role: string,
//     public metadata: {
//       date: string;
//       tags: string[];
//     } = { date: new Date().toISOString(), tags: [] }
//   ) {}

//   clone(): Person {
//     const cloneData = JSON.parse(JSON.stringify(this.metadata));
//     return new Person(cloneData.name, cloneData.role, cloneData.metadata);
//   }
// }

// const john = new Person("John Doe", "Software Engineer", {
//   date: "2023-10-01T12:00:00Z",
//   tags: ["developer", "typescript"],
// });

// const jane = john.clone();
// jane.name = "Jane Doe";

// const walter = jane.clone();
// walter.name = "Walter White";
// walter.role = "Manager";
// walter.metadata.tags = ["manager", "leadership"];

// console.log("John:", john);
// console.log("Jane:", jane);
// console.log("Walter:", walter);

interface Prototype<T> {
  clone(): T;
}

class Person implements Prototype<Person> {
  constructor(
    public name: string,
    public role: string,
    public metadata: {
      date: string;
      tags: string[];
    } = { date: new Date().toISOString(), tags: [] }
  ) {}

  clone(): Person {
    const cloneData = JSON.parse(JSON.stringify(this.metadata));
    return new Person(cloneData.name, cloneData.role, cloneData.metadata);
  }
}

type PersonType = "Person" | "Employee" | "Manager";

class PersonFactory {
  private static templates: Record<PersonType, Person> = {
    Person: new Person("John Doe", "Software Engineer"),
    Employee: new Person("Jane Doe", "Software Engineer"),
    Manager: new Person("Walter White", "Manager"),
  };

  static create(type: PersonType): Person {
    const template = this.templates[type];
    return template.clone();
  }
}

const person1 = PersonFactory.create("Person");
person1.name = "John Doe";
person1.role = "Software Engineer";
const person2 = person1.clone();

person2.name = "walter white";
person2.role = "Chemist";
person2.metadata.tags = ["chemist", "science"];

console.log(person1);
console.log(person2);

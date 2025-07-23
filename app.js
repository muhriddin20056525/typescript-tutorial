"use strict";
// interface Prototype<T> {
//   clone(): T;
// }
class Person {
    constructor(name, role, metadata = { date: new Date().toISOString(), tags: [] }) {
        this.name = name;
        this.role = role;
        this.metadata = metadata;
    }
    clone() {
        const cloneData = JSON.parse(JSON.stringify(this.metadata));
        return new Person(cloneData.name, cloneData.role, cloneData.metadata);
    }
}
class PersonFactory {
    static create(type) {
        const template = this.templates[type];
        return template.clone();
    }
}
PersonFactory.templates = {
    Person: new Person("John Doe", "Software Engineer"),
    Employee: new Person("Jane Doe", "Software Engineer"),
    Manager: new Person("Walter White", "Manager"),
};
const person1 = PersonFactory.create("Person");
person1.name = "John Doe";
person1.role = "Software Engineer";
const person2 = person1.clone();
person2.name = "walter white";
person2.role = "Chemist";
person2.metadata.tags = ["chemist", "science"];
console.log(person1);
console.log(person2);

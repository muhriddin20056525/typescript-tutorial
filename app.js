"use strict";
// interface Person {
//   greeting(): void;
// }
class Factory {
    static create(Ctor, ...args) {
        return new Ctor(...args);
    }
}
class User {
    constructor(name) {
        this.name = name;
    }
}
class Product {
    constructor(title) {
        this.title = title;
    }
}
const user = Factory.create(User, "John Doe");
console.log(user);
const product = Factory.create(Product, "Laptop");
console.log(product);

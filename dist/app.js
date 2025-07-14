"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("./services/user.service");
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const user = new user_service_1.User("John", 30);
console.log(user);

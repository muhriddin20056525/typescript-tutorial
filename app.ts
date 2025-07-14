// File bilan ishlash

import { User } from "./services/user.service";

class Person {
  constructor(public name: string, public age: number) {}
}

const user = new User("John", 30);
console.log(user);

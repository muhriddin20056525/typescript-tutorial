"use strict";
// const fullName: string = "John Doe";
// let isMarried: boolean = true;
// let age: number = 20;
class Car {
    constructor(model) {
        this.model = model;
    }
    startEngine() {
        console.log("Engine Started");
    }
    drive(speed) {
        console.log(`${this.model}: driving at ${speed} km/h`);
    }
    fly(speed) {
        console.log(`${this.model}: flying at ${speed} km/h`);
    }
}
const toyota = new Car("Toyota");
toyota.startEngine();
toyota.drive(240);
toyota.fly(230);
const honda = new Car("Honda");
honda.startEngine();
honda.drive(240);
honda.fly(569);

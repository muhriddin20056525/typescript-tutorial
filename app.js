"use strict";
// const fullName: string = "John Doe";
// let isMarried: boolean = true;
// let age: number = 20;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function ChangeShape(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.name = "Tiangle";
            this.color = "red";
        }
        getInfo() {
            return this.name + this.color;
        }
    };
}
function WithVersion(version) {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.version = version;
            }
        };
    };
}
let Circle = class Circle {
    constructor() {
        this.name = "Circle";
        console.log(`Cirlce Created`);
    }
    getValue() {
        return this.name;
    }
};
Circle = __decorate([
    ChangeShape,
    WithVersion("4.2.4")
], Circle);
const shape = new Circle();
console.log(shape);

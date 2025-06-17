"use strict";
// const fullName: string = "John Doe";
// let isMarried: boolean = true;
// let age: number = 20;
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchData(endpoint) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = yield response.json();
        return data;
    });
}
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield fetchData("users");
        users.forEach((c) => console.log(c.name));
    });
}
function getPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        const posts = yield fetchData("posts");
        posts.forEach((c) => console.log(c.title));
    });
}
getPosts();

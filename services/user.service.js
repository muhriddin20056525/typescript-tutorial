"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
class UserService {
    constructor() {
        this.users = new Map();
    }
    findByEmail(email) {
        console.log("Users: ", this.users);
        return this.users.get(email);
    }
    createUser(email, password) {
        this.users.set(email, { email, password });
        console.log(`User created: ${email}`);
        console.log("Users: ", this.users);
    }
}
exports.UserService = UserService;

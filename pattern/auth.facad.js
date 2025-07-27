"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthFacade = void 0;
const hash_service_1 = require("../services/hash.service");
const token_service_1 = require("../services/token.service");
const user_service_1 = require("../services/user.service");
class AuthFacade {
    constructor() {
        this.userService = new user_service_1.UserService();
        this.hashService = new hash_service_1.HashService();
        this.tokenService = new token_service_1.TokenService();
    }
    register(email, password) {
        const existingUser = this.userService.findByEmail(email);
        if (existingUser) {
            throw new Error("User already exist");
        }
        const hashedPassword = this.hashService.hash(password);
        this.userService.createUser(email, hashedPassword);
        return this.tokenService.generateToken({ email });
    }
    login(email, password) {
        const user = this.userService.findByEmail(email);
        if (!user)
            throw new Error("User not found");
        const isMatch = this.hashService.compare(password, user.password);
        if (!isMatch)
            throw new Error("Invalid Password");
        return this.tokenService.generateToken({ email });
    }
}
exports.AuthFacade = AuthFacade;

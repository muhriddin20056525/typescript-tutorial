"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashService = void 0;
class HashService {
    hash(password) {
        return `hashed_${password}`;
    }
    compare(password, hashedPassword) {
        return this.hash(password) === hashedPassword;
    }
}
exports.HashService = HashService;

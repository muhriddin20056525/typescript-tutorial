"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseAuth = void 0;
class FirebaseAuth {
    async signIn(email, pass) {
        return `Legacy token for ${email}`;
    }
    async createUser(email, pass) {
        return `Legacy account created for ${email}`;
    }
}
exports.FirebaseAuth = FirebaseAuth;

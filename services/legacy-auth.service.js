"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegacyAuth = void 0;
class LegacyAuth {
    async loginWithEmailAndPassword(email, pass) {
        return `Legacy token for ${email}`;
    }
    async signup(email, pass) {
        return `Legacy account created for ${email}`;
    }
}
exports.LegacyAuth = LegacyAuth;

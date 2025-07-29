"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegacyAuthAdapter = void 0;
class LegacyAuthAdapter {
    constructor(legacy) {
        this.legacy = legacy;
    }
    login(email, pas) {
        return this.legacy.loginWithEmailAndPassword(email, pas);
    }
    register(email, pas) {
        return this.legacy.signup(email, pas);
    }
}
exports.LegacyAuthAdapter = LegacyAuthAdapter;

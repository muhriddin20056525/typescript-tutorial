"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseAuthAdapter = void 0;
class FirebaseAuthAdapter {
    constructor(firebase) {
        this.firebase = firebase;
    }
    login(email, pas) {
        return this.firebase.signIn(email, pas);
    }
    register(email, pas) {
        return this.firebase.createUser(email, pas);
    }
}
exports.FirebaseAuthAdapter = FirebaseAuthAdapter;

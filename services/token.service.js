"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
class TokenService {
    generateToken(payload) {
        return `token_${payload.email}-${new Date().getTime()}`;
    }
}
exports.TokenService = TokenService;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const callback_1 = __importDefault(require("safe-json-parse/callback"));
(0, callback_1.default)('{ "x": 42 }', (err, result) => {
    if (err)
        console.error(err);
    else
        console.log(result);
});

"use strict";
// class OldPrinter {
//   printText(text: string) {
//     console.log(`Printing Text ${text}`);
//   }
// }
Object.defineProperty(exports, "__esModule", { value: true });
// interface NewPrinter {
//   printDocument: (document: string) => void;
// }
// class PrinterAdapter implements NewPrinter {
//   constructor(private oldPrinter: OldPrinter) {}
//   printDocument(document: string): void {
//     this.oldPrinter.printText(document);
//   }
// }
// const legacyPrinter = new OldPrinter();
// const adapter = new PrinterAdapter(legacyPrinter);
// adapter.printDocument("Hello World");
const firebase_auth_adapter_1 = require("./adapters/firebase-auth.adapter");
const legacy_auth_adapter_1 = require("./adapters/legacy-auth.adapter");
const firebase_auth_service_1 = require("./services/firebase-auth.service");
const legacy_auth_service_1 = require("./services/legacy-auth.service");
async function bootstrap() {
    const firebaseAdapter = new firebase_auth_adapter_1.FirebaseAuthAdapter(new firebase_auth_service_1.FirebaseAuth());
    const legacyAdapter = new legacy_auth_adapter_1.LegacyAuthAdapter(new legacy_auth_service_1.LegacyAuth());
    const firebaseLogin = await firebaseAdapter.login("m@gmail.com", "12345");
    const firebaseRegister = await firebaseAdapter.register("d@gmail.com", "12345");
    const legacyLogin = await legacyAdapter.login("m@gmail.com", "12345");
    const legacyRegister = await legacyAdapter.register("d@gmail.com", "12345");
    console.log("Firebase login", firebaseLogin);
    console.log("Firebase Register", firebaseRegister);
    console.log("Legacy login", legacyLogin);
    console.log("Legacy Register", legacyRegister);
}
bootstrap();

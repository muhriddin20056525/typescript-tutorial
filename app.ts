// class OldPrinter {
//   printText(text: string) {
//     console.log(`Printing Text ${text}`);
//   }
// }

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

import { FirebaseAuthAdapter } from "./adapters/firebase-auth.adapter";
import { LegacyAuthAdapter } from "./adapters/legacy-auth.adapter";
import { FirebaseAuth } from "./services/firebase-auth.service";
import { LegacyAuth } from "./services/legacy-auth.service";

async function bootstrap() {
  const firebaseAdapter = new FirebaseAuthAdapter(new FirebaseAuth());
  const legacyAdapter = new LegacyAuthAdapter(new LegacyAuth());

  const firebaseLogin = await firebaseAdapter.login("m@gmail.com", "12345");
  const firebaseRegister = await firebaseAdapter.register(
    "d@gmail.com",
    "12345"
  );

  const legacyLogin = await legacyAdapter.login("m@gmail.com", "12345");
  const legacyRegister = await legacyAdapter.register("d@gmail.com", "12345");

  console.log("Firebase login", firebaseLogin);
  console.log("Firebase Register", firebaseRegister);

  console.log("Legacy login", legacyLogin);
  console.log("Legacy Register", legacyRegister);
}

bootstrap();

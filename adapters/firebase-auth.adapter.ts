import { AuthService } from "../interfaces/auth";
import { FirebaseAuth } from "../services/firebase-auth.service";

export class FirebaseAuthAdapter implements AuthService {
  constructor(private firebase: FirebaseAuth) {}

  login(email: string, pas: string): Promise<string> {
    return this.firebase.signIn(email, pas);
  }

  register(email: string, pas: string): Promise<string> {
    return this.firebase.createUser(email, pas);
  }
}

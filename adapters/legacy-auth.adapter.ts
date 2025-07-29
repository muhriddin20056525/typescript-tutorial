import { AuthService } from "../interfaces/auth";
import { LegacyAuth } from "../services/legacy-auth.service";

export class LegacyAuthAdapter implements AuthService {
  constructor(private legacy: LegacyAuth) {}

  login(email: string, pas: string): Promise<string> {
    return this.legacy.loginWithEmailAndPassword(email, pas);
  }

  register(email: string, pas: string): Promise<string> {
    return this.legacy.signup(email, pas);
  }
}

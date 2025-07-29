export class LegacyAuth {
  async loginWithEmailAndPassword(
    email: string,
    pass: string
  ): Promise<string> {
    return `Legacy token for ${email}`;
  }

  async signup(email: string, pass: string): Promise<string> {
    return `Legacy account created for ${email}`;
  }
}

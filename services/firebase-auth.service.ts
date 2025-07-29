export class FirebaseAuth {
  async signIn(email: string, pass: string): Promise<string> {
    return `Legacy token for ${email}`;
  }

  async createUser(email: string, pass: string): Promise<string> {
    return `Legacy account created for ${email}`;
  }
}

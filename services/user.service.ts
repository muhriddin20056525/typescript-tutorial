export class UserService {
  private users: Map<string, { email: string; password: string }> = new Map();

  findByEmail(email: string) {
    console.log("Users: ", this.users);

    return this.users.get(email);
  }

  createUser(email: string, password: string) {
    this.users.set(email, { email, password });
    console.log(`User created: ${email}`);
    console.log("Users: ", this.users);
  }
}

export class HashService {
  hash(password: string): string {
    return `hashed_${password}`;
  }

  compare(password: string, hashedPassword: string): boolean {
    return this.hash(password) === hashedPassword;
  }
}

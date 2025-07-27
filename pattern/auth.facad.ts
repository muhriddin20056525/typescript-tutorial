import { HashService } from "../services/hash.service";
import { TokenService } from "../services/token.service";
import { UserService } from "../services/user.service";

export class AuthFacade {
  private userService = new UserService();
  private hashService = new HashService();
  private tokenService = new TokenService();

  register(email: string, password: string): string {
    const existingUser = this.userService.findByEmail(email);
    if (existingUser) {
      throw new Error("User already exist");
    }

    const hashedPassword = this.hashService.hash(password);

    this.userService.createUser(email, hashedPassword);

    return this.tokenService.generateToken({ email });
  }

  login(email: string, password: string) {
    const user = this.userService.findByEmail(email);

    if (!user) throw new Error("User not found");

    const isMatch = this.hashService.compare(password, user.password);

    if (!isMatch) throw new Error("Invalid Password");

    return this.tokenService.generateToken({ email });
  }
}

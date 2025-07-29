export interface AuthService {
  login(email: string, pas: string): Promise<string>;
  register(email: string, pas: string): Promise<string>;
}

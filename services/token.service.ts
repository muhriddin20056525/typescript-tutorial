export class TokenService {
  generateToken(payload: { email: string }): string {
    return `token_${payload.email}-${new Date().getTime()}`;
  }
}

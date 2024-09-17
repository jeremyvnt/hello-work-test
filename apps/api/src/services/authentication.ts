import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

import { LoginDao } from '../types/login';

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const API_URL = process.env.API_URL;

class AuthService {
  private token: string | null = null;
  private tokenExpiration: number | null = null;

  private async login(): Promise<void> {
    try {
      const response = await axios.post<LoginDao>(`${API_URL}/login`, {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      });
      this.token = response.data.token;
      const decodedToken = jwtDecode(this.token);
      this.tokenExpiration = decodedToken?.exp ? decodedToken?.exp * 1000 : null;
    } catch (error) {
      console.error(error);
    }
  }

  private isTokenValid(): boolean {
    if (!this.token || !this.tokenExpiration) return false;

    return Date.now() < this.tokenExpiration;
  }

  public async getValidToken(): Promise<string | null> {
    if (this.isTokenValid()) return this.token;

    await this.login();
    return this.token;
  }
}

export const authService = new AuthService();

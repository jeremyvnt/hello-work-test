"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const axios_1 = __importDefault(require("axios"));
const jwt_decode_1 = require("jwt-decode");
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const API_URL = process.env.API_URL;
class AuthService {
    token = null;
    tokenExpiration = null;
    async login() {
        try {
            const response = await axios_1.default.post(`${API_URL}/login`, {
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
            });
            this.token = response.data.token;
            const decodedToken = (0, jwt_decode_1.jwtDecode)(this.token);
            this.tokenExpiration = decodedToken?.exp ? decodedToken?.exp * 1000 : null;
        }
        catch (error) {
            console.error(error);
        }
    }
    isTokenValid() {
        if (!this.token || !this.tokenExpiration)
            return false;
        return Date.now() < this.tokenExpiration;
    }
    async getValidToken() {
        if (this.isTokenValid())
            return this.token;
        await this.login();
        return this.token;
    }
}
exports.authService = new AuthService();

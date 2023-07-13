import Cookies from "js-cookie";
import { ACCESS_TOKEN_COOKIE_KEY } from "./constants";

class CookieAuthStorageService {
  get isCanUse() {
    return typeof document !== "undefined";
  }

  setToken(token: string) {
    if (!this.isCanUse) {
      throw new Error("cookieAuthStorageService can`t use in SSR");
    }

    Cookies.set(ACCESS_TOKEN_COOKIE_KEY, token);
  }

  getToken() {
    if (!this.isCanUse) {
      throw new Error("cookieAuthStorageService can`t use in SSR");
    }

    return Cookies.get(ACCESS_TOKEN_COOKIE_KEY) ?? null;
  }

  clearToken() {
    if (!this.isCanUse) {
      throw new Error("cookieAuthStorageService can`t use in SSR");
    }

    Cookies.remove(ACCESS_TOKEN_COOKIE_KEY);
  }
}

export const cookieAuthStorageService = new CookieAuthStorageService();

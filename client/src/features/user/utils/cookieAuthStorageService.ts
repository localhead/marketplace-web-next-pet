import Cookies from "js-cookie";

class CookieAuthStorageService {
  get isCanUse() {
    return typeof document !== "undefined";
  }

  setToken(token: string) {
    if (!this.isCanUse) {
      throw new Error("cookieAuthStorageService can`t use in SSR");
    }

    Cookies.set("access-token", token);
  }

  getToken() {
    if (!this.isCanUse) {
      throw new Error("cookieAuthStorageService can`t use in SSR");
    }

    return Cookies.get("access-token") ?? null;
  }

  clearToken() {
    if (!this.isCanUse) {
      throw new Error("cookieAuthStorageService can`t use in SSR");
    }

    Cookies.remove("access-token");
  }
}

export const cookieAuthStorageService = new CookieAuthStorageService();

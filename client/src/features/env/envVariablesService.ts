export class EnvVariablesService {
  public PUBLIC_SERVER_URL: string;

  constructor() {
    const PUBLIC_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
    if (PUBLIC_SERVER_URL === undefined) {
      throw new Error('can`t find env variable "NEXT_PUBLIC_SHOP_API_URL"');
    }
    this.PUBLIC_SERVER_URL = PUBLIC_SERVER_URL;
  }
}

export const envVariablesService = new EnvVariablesService();

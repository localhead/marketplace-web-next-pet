export class EnvVariablesService {
  public GOOGLE_MAPS_API_KEY: string;
  public NEXT_PUBLIC_BANK_API_URL: string;

  // создание запроса: 4
  // меняем API_URL в .env.production и в .env.development

  constructor() {
    const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (GOOGLE_MAPS_API_KEY === undefined) {
      throw new Error(
        'can`t find env variable "NEXT_PUBLIC_GOOGLE_MAPS_API_KEY"'
      );
    }
    this.GOOGLE_MAPS_API_KEY = GOOGLE_MAPS_API_KEY;

    const NEXT_PUBLIC_BANK_API_URL = process.env.NEXT_PUBLIC_BANK_API_URL;
    if (NEXT_PUBLIC_BANK_API_URL === undefined) {
      throw new Error('can`t find env variable "NEXT_PUBLIC_BANK_API_URL"');
    }
    this.NEXT_PUBLIC_BANK_API_URL = NEXT_PUBLIC_BANK_API_URL;
  }
}

export const envVariablesService = new EnvVariablesService();

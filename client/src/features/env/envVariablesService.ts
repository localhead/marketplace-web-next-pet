export class EnvVariablesService {
  public NEXT_PUBLIC_BANK_API_URL: string;

  constructor() {
    const NEXT_PUBLIC_BANK_API_URL = process.env.NEXT_PUBLIC_BANK_API_URL;
    if (NEXT_PUBLIC_BANK_API_URL === undefined) {
      throw new Error('can`t find env variable "NEXT_PUBLIC_BANK_API_URL"');
    }
    this.NEXT_PUBLIC_BANK_API_URL = NEXT_PUBLIC_BANK_API_URL;
  }
}

export const envVariablesService = new EnvVariablesService();

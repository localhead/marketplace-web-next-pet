import { envVariablesService } from "@features/env/envVariablesService";

// создание запроса: 4
// меняем API_URL
export const API_URL = envVariablesService.NEXT_PUBLIC_BANK_API_URL;

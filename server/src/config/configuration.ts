import { registerAs } from '@nestjs/config';
import { sqlConfig } from './sql.config';

// Step 5
// Разворачиваем корневой конфиг
export const databaseConfig = registerAs('database', () => ({
  sql: {
    ...sqlConfig(),
  },
}));
// Step 5

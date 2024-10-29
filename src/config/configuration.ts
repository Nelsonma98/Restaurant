import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  connection: process.env.DB_TYPE || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'username',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'db_restaurant',
  port: parseInt(process.env.DB_PORT, 10) || 5432,
}));

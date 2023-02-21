import dotenv from 'dotenv';

dotenv.config();
export const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
export const connectionString = process.env.CONNECTION_STRING;
export const authsignal_public_key = process.env.AUTHSIGNAL_PUBLIC_KEY;
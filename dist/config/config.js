import { config as conf } from "dotenv";
conf();
const _config = {
    PORT: process.env.PORT,
    DATABASE_URL: process.env.DATABASE_URL,
    env: process.env.NODE_ENV,
    JWT_KEY: process.env.JWT_KEY
};
export const config = Object.freeze(_config);

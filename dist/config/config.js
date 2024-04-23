import { config as conf } from "dotenv";
conf();
const _config = {
    PORT: process.env.PORT,
    DATABASE_URL: process.env.DATABASE_URL
};
export const config = Object.freeze(_config);

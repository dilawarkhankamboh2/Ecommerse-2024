import { config as conf } from "dotenv";
conf();
const _config = {
    PORT: process.env.PORT
};
export const config = Object.freeze(_config);

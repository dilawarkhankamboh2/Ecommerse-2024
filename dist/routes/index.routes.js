import { authRoutes } from "./authRoutes/auth.routes.js";
export const allApiRoutes = (app) => {
    // auth routes
    authRoutes(app);
};

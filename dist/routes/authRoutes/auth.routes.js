import { registerController } from "../../controllers/auth/authController.js";
export const authRoutes = (app) => {
    // register user
    app.post("/api/user/register", registerController);
};

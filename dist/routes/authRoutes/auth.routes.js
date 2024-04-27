import { login, logout, register } from "../../controllers/auth/authController.js";
import { auth } from "../../middlewares/auth.js";
import { avator } from "../../multer/upload.js";
export const authRoutes = (app) => {
    // register user
    app.post("/api/user/register", avator, register);
    // login user
    app.post("/api/user/login", login);
    // logout user
    app.get("/api/user/logout", auth, logout);
};

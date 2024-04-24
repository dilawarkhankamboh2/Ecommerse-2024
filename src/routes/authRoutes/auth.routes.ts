import { login, register } from "../../controllers/auth/authController.js"
import { auth } from "../../middlewares/auth.js";

export const authRoutes= (app:any)=>{

    // register user
    app.post("/api/user/register", register);

    // login user
    app.post("/api/user/login", auth, login);
}
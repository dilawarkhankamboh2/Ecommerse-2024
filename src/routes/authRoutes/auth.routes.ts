import { registerController } from "../../controllers/auth/authController.js"

export const authRoutes= (app:any)=>{

    // register user
    app.post("/api/user/register", registerController);

}
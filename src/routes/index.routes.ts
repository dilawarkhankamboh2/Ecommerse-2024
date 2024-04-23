import { authRoutes } from "./authRoutes/auth.routes.js"

export const allApiRoutes = (app:any)=>{

    // auth routes
    authRoutes(app);

}
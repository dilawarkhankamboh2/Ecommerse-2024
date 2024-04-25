import { authRoutes } from "./authRoutes/auth.routes.js"
import { productRoutes } from "./productRoutes/product.routes.js";

export const allApiRoutes = (app:any)=>{

    // auth routes
    authRoutes(app);
    productRoutes(app);
}
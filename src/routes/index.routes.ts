import { authRoutes } from "./authRoutes/auth.routes.js"
import { commentRoutes } from "./commentRoutes/comment.routes.js";
import { orderRoutes } from "./orderRoutes/order.routes.js";
import { productRoutes } from "./productRoutes/product.routes.js";
import { userRoutes } from "./userRoutes/user.routes.js";

export const allApiRoutes = (app:any)=>{

    // auth routes
    authRoutes(app);
    // product routes
    productRoutes(app);
    // user routes
    userRoutes(app);
    // order routes
    orderRoutes(app);
    // comment routes
    commentRoutes(app);
}
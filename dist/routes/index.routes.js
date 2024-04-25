import { authRoutes } from "./authRoutes/auth.routes.js";
import { productRoutes } from "./productRoutes/product.routes.js";
import { userRoutes } from "./userRoutes/user.routes.js";
export const allApiRoutes = (app) => {
    // auth routes
    authRoutes(app);
    // product routes
    productRoutes(app);
    // user routes
    userRoutes(app);
};

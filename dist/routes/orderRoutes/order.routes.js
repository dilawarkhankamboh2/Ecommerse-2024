import { allOrders, createOrders, meOrders } from "../../controllers/orders/orderControler.js";
export const orderRoutes = (app) => {
    // create orders
    app.post("/api/orders/create", createOrders);
    // get all orders
    app.get("/api/orders/all", allOrders);
    // me orders
    app.get("/api/orders/me", meOrders);
};

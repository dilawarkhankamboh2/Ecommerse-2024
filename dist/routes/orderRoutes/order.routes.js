import { createOrders } from "../../controllers/orders/orderControler.js";
export const orderRoutes = (app) => {
    // create orders
    app.post("/api/order/create
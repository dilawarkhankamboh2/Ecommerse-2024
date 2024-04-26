import { allOrders, createOrders, deleteOrder, meOrders, singleOrder, updateStatus } from "../../controllers/orders/orderControler.js";
export const orderRoutes = (app) => {
    // create orders
    app.post("/api/orders/create", createOrders);
    // get all orders
    app.get("/api/orders/all", allOrders);
    // me orders
    app.get("/api/orders/me", meOrders);
    // single order
    app.get("/api/order/single/:id", singleOrder);
    // update order status
    app.put("/api/order/order-status/:id", updateStatus);
    // delete order
    app.put("/api/order/delete-order/:id", deleteOrder);
};

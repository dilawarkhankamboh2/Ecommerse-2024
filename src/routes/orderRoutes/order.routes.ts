import { allOrders, createOrders, meOrders, singleOrder, updateStatus } from "../../controllers/orders/orderControler.js"


export const orderRoutes = (app:any)=>{

    // create orders
    app.post("/api/orders/create", createOrders);

    // get all orders
    app.get("/api/orders/all", allOrders);

    // me orders
    app.get("/api/orders/me", meOrders);

    // single order
    app.get("/api/order/single/:id", singleOrder);

    // update order status
    app.put("/api/order/order-status/:id", updateStatus)
}
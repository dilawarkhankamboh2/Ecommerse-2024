import { allOrders, createOrders, deleteOrder, meOrders, singleOrder, updateStatus } from "../../controllers/orders/orderControler.js"
import { auth } from "../../middlewares/auth.js";


export const orderRoutes = (app:any)=>{

    // create orders
    app.post("/api/orders/create", auth, createOrders);

    // get all orders
    app.get("/api/orders/all", auth, allOrders);

    // me orders
    app.get("/api/orders/me", auth, meOrders);

    // single order
    app.get("/api/order/single/:id", auth, singleOrder);

    // update order status
    app.put("/api/order/order-status/:id",auth, updateStatus);

    // delete order
    app.put("/api/order/delete-order/:id",auth, deleteOrder);
}
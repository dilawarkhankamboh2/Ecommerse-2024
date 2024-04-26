import { createOrders } from "../../controllers/orders/orderControler.js"


export const orderRoutes = (app:any)=>{

    // create orders
    app.post("/api/order/create", createOrders)

    // get all orders
    app.post("/api/order/create", createOrders)
}
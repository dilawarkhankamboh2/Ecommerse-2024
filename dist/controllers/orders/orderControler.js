import { TryCatch } from "../../utils/tryCatch.js";
import createHttpError from "http-errors";
import { Order } from "../../models/orderModel/orders.model.js";
// create orders
const createOrders = TryCatch(async (req, res, next) => {
    const { user, ordersItems, shippingInfo, shippingCharges, discount, subTotal, tax, total } = req.body;
    if (!user || !ordersItems || !shippingInfo || !shippingCharges || !discount || !subTotal || !tax || !total) {
        return next(createHttpError(400, "All fields are required"));
    }
    // create order
    await Order.create({
        user, ordersItems, shippingInfo, shippingCharges, discount, subTotal, tax, total
    });
    return res.status(201).json({ message: "order created successfully" });
});
// get all orders
const allOrders = TryCatch(async (req, res, next) => {
    const orders = await Order.find({});
    return res.status(200).json(orders);
});
export { createOrders, allOrders };

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
    const orders = await Order.find({}).populate("user", ["name", "email"]);
    return res.status(200).json(orders);
});
// me all orders
const meOrders = TryCatch(async (req, res, next) => {
    const { id } = req.query;
    const orders = await Order.find({ user: id });
    if (!orders) {
        return next(createHttpError(400, "orders not found"));
    }
    return res.status(200).json(orders);
});
// single order
const singleOrder = TryCatch(async (req, res, next) => {
    const { id } = req.params;
    const order = await Order.findById(id);
    if (!order) {
        return next(createHttpError(400, "orders not found"));
    }
    return res.status(200).json(order);
});
export { createOrders, allOrders, meOrders, singleOrder };

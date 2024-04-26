import { deleteComment } from "../../controllers/comment/commentControler.js";
import { allCoupon, applyDiscount, createCoupon } from "../../controllers/coupon/couponControler.js";
// coupon routes
export const couponRoutes = (app) => {
    // create coupon
    app.post("/api/coupon/create", createCoupon);
    // apply coupon discount
    app.get("/api/coupon/discount", applyDiscount);
    // get all coupons
    app.get("/api/coupon/all", allCoupon);
    // delete coupon
    app.delete("/api/coupon/delete", deleteComment);
};

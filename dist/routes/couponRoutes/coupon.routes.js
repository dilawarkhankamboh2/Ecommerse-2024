// coupon routes
export const couponRoutes = (app) => {
    // create coupon
    app.post("/api/coupon/create");
    // apply coupon discount
    app.get("/api/coupon/discount");
    // get all coupons
    app.get("/api/coupon/all");
    // delete coupon
    app.delete("/api/coupon/delete");
};

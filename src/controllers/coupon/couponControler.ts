import createHttpError from "http-errors";
import { TryCatch } from "../../utils/tryCatch.js";
import { Coupon } from "../../models/couponModel/coupons.model.js";

// create coupon
const createCoupon = TryCatch(async(req, res, next)=>{

    const {coupon, amount} = req.body;

    if(!coupon || !amount) return next(createHttpError(400, "Both fields are required"));

    // create coupon
    await Coupon.create({coupon, amount});

    return res.status(201).json({message: "Coupon created"});
})

// apply discount
const applyDiscount = TryCatch(async(req, res, next)=>{

    const {coupon} = req.query;

    const myCoupon= await Coupon.findOne({coupon});

    if(!myCoupon) return next(createHttpError(400, "Coupon not found"));

    return res.status(201).json({message: "Coupon applied successfully"});

})

// get all coupons
const allCoupon= TryCatch(async(req, res, next)=>{

    const coupon= await Coupon.find({});
    return res.status(200).json(coupon);
})

const deleteCoupon= TryCatch(async(req, res, next)=>{

    const {coupon}= req.query;

    const myCoupon= await Coupon.findOne({coupon});

    await myCoupon?.deleteOne();

    return res.status(200).json({message: "Coupon deleted"})
})

export {createCoupon, applyDiscount, allCoupon, deleteCoupon}
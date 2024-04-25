import { TryCatch } from "../../utils/tryCatch.js";
import createHttpError from "http-errors";
import { Product } from "../../models/productModel/products.model.js";
// create product
const createProducts = TryCatch(async (req, res, next) => {
    const { name, price, stock, category } = req.body;
    if (!name || !price || !stock || !category) {
        return next(createHttpError(400, "All fields are required"));
    }
    // photo
    const photo = req.file;
    if (!photo) {
        return next(createHttpError(400, "photo must be required"));
    }
    // create products
    await Product.create({ name, price, category, stock, photo: photo.path });
    return res.status(200).json({ message: "product created", success: true });
});
export { createProducts };

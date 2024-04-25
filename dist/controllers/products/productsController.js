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
    return res.status(201).json({ message: "product created", success: true });
});
// get all products
const allProducts = TryCatch(async (req, res, next) => {
    const products = await Product.find({});
    return res.status(200).json(products);
});
// get single products
const singleProduct = TryCatch(async (req, res, next) => {
    const { id } = req.params;
    if (!id)
        return next(createHttpError(400, "id must be required"));
    const product = await Product.findById(id);
    if (!product)
        return next(createHttpError(400, "product not found!"));
    return res.status(200).json(product);
});
// update single products
const updateProduct = TryCatch(async (req, res, next) => {
    const { name, price, category, stock } = req.body;
    const photo = req.file;
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product)
        return next(createHttpError(400, "product not found!"));
    if (product && name) {
        product.name = name;
    }
    ;
    if (product && price) {
        product.price = price;
    }
    ;
    if (product && category) {
        product.category = category;
    }
    ;
    if (product && stock) {
        product.stock = stock;
    }
    ;
    if (product && photo) {
        product.photo = photo.path;
    }
    ;
    await product.save();
    return res.status(200).json({ message: "product update successfully", success: true });
});
export { createProducts, allProducts, singleProduct, updateProduct };

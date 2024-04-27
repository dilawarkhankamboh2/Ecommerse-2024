import { TryCatch } from "../../utils/tryCatch.js";
import createHttpError from "http-errors";
import { Product } from "../../models/productModel/products.model.js";
import { rm } from "fs";
// create product
const createProducts = TryCatch(async (req, res, next) => {
    const { name, description, price, stock, category, numOfReviews, rating, images, reviews } = req.body;
    if (!name || !price || !stock || !category) {
        return next(createHttpError(400, "All fields are required"));
    }
    // const images = req.files;
    const newProduct = await Product.create({ name, description, price, category, stock, numOfReviews, rating, images, reviews });
    await newProduct.save();
    // if(!images){return next(createHttpError(400, "images must be required"))}
    // if (images) {
    //     for (const productImages of Object.values(images)) {
    // Create a new product
    //     const newProduct = await Product.create(
    //         {name, price, category, stock, numOfReviews,rating, images:[], reviews}
    //     );
    // newProduct.images = productImages.map((image: { path: string }) => ({ image: image.path }));
    //     for (const image of productImages) {newProduct.images.push({ image: image.path })}
    //         await newProduct.save();
    //     }
    // }
    return res.status(201).json({ message: "product created", success: true });
});
// get all products
const allProducts = TryCatch(async (req, res, next) => {
    const products = await Product.find({});
    return res.status(200).json(products);
});
// category products
const productCategory = TryCatch(async (req, res, next) => {
    const products = await Product.distinct("category");
    return res.status(200).json(products);
});
// latest products
const latestProducts = TryCatch(async (req, res, next) => {
    const products = await Product.find().sort({ createdAt: -1 });
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
    if (photo) {
        rm(photo.path, (err) => {
            if (err) {
                console.error("Error deleting file:", err);
            }
            else {
                console.log("File deleted successfully");
            }
        });
    }
    if (!product)
        return next(createHttpError(400, "product not found!"));
    // if (photo && product) {product.images = photo.path};
    if (name && product) {
        product.name = name;
    }
    ;
    if (stock && product) {
        product.stock = stock;
    }
    ;
    if (price && product) {
        product.price = price;
    }
    ;
    if (category && product) {
        product.category = category;
    }
    ;
    await product.save();
    return res.status(200).json({ message: "product update successfully", success: true });
});
// search products
const searchProducts = TryCatch(async (req, res, next) => {
    const { search, price, category } = req.query;
    const page = Number(req.query.page) || 1;
    const limit = Number(process.env.PRODUCT_PER_PAGE) || 4;
    const skip = (page - 1) * limit;
    const BaseQuery = {};
    if (search) {
        BaseQuery.name = { $regex: search, $options: "i" };
    }
    if (price) {
        BaseQuery.price = { $lte: Number(price) };
    }
    if (category) {
        BaseQuery.category = category;
    }
    const products = await Product.find(BaseQuery).limit(limit).skip(skip);
    return res.status(200).json(products);
});
// delete product
const deleteProduct = TryCatch(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (product) {
        rm(product.images[0].image, (err) => {
            if (err) {
                console.error("Error deleting file:", err);
            }
            else {
                console.log("File deleted successfully");
            }
        });
    }
    await product?.deleteOne();
    return res.status(200).json({ message: "Product deleted successfully" });
});
export { createProducts, allProducts, singleProduct, updateProduct, productCategory, latestProducts, searchProducts, deleteProduct };

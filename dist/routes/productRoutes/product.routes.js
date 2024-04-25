import { allProducts, createProducts, singleProduct } from "../../controllers/products/productsController.js";
import { fileUpload } from "../../utils/upload.js";
export const productRoutes = (app) => {
    // create products
    app.post("/api/product/create", fileUpload, createProducts);
    // get all products
    app.get("/api/product/all-products", allProducts);
    // get single product
    app.get("/api/product/single-product/:id", singleProduct);
};

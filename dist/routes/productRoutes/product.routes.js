import { createProducts } from "../../controllers/products/productsController.js";
import { fileUpload } from "../../utils/upload.js";
export const productRoutes = (app) => {
    app.post("/api/product/create", fileUpload, createProducts);
};

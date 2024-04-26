import { allProducts, createProducts, deleteProduct, latestProducts, productCategory, searchProducts, singleProduct, updateProduct } from "../../controllers/products/productsController.js"
import { fileUpload } from "../../utils/upload.js";

export const productRoutes = (app: any)=>{

    // create products
    app.post("/api/product/create", fileUpload, createProducts);

    // get all products
    app.get("/api/product/all-products", allProducts);

    // get all products category
    app.get("/api/product/products-category", productCategory);

    // get all latest products
    app.get("/api/product/latest-products", latestProducts);

    // get single product
    app.get("/api/product/single-product/:id", singleProduct);

    // update single product
    app.put("/api/product/update-product/:id", fileUpload, updateProduct);

    // search all products
    app.get("/api/product/search-products", searchProducts);

    // delete single product
    app.delete("/api/product/delete-product/:id", deleteProduct);
}
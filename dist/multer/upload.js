import multer from "multer";
const storage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, "upload");
    },
    filename(req, file, callback) {
        callback(null, `${Date.now()}-${file.originalname}`);
    }
});
// this is for user
export const avator = multer({ storage }).single("avator");
// this is for products
export const fileUpload = multer({ storage }).fields([{ name: "image", maxCount: 2 }]);

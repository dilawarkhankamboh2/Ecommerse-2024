import multer from "multer";

 const storage = multer.diskStorage({

    destination(req, file, callback){

        callback(null, "upload");
    },

    filename(req, file, callback){

        callback(null, `${Date.now()}-${file.originalname}` )
    }
})


export const fileUpload= multer({storage}).fields([{name: "product", maxCount:4}]);
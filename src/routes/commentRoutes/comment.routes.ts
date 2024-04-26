import { allComments, createComments, deleteComment } from "../../controllers/comment/commentControler.js"
import { auth } from "../../middlewares/auth.js";


export const commentRoutes= (app:any)=>{

    // create comments
    app.post("/api/comment/create", auth, createComments);

    // get all comments
    app.get("/api/comment/all", auth, allComments);

    // get all comments
    app.delete("/api/comment/delete/:id", auth, deleteComment);
}
import { createComments } from "../../controllers/comment/commentControler.js"


export const commentRoutes= (app:any)=>{

    // create comments
    app.post("/api/comment/create",createComments);
}
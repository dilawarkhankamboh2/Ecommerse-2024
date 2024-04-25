import { allUsers, deleteUser, singleUser } from "../../controllers/user/userController.js"
import { auth } from "../../middlewares/auth.js";


export const userRoutes= (app:any)=>{

    // get all users
    app.get("/api/user/all", auth, allUsers);

    // get single user
    app.get("/api/user/single-user/:id", auth, singleUser);

    // delete single user
    app.delete("/api/user/delete-user/:id", auth, deleteUser);
}
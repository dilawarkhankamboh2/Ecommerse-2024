import { allUsers, singleUsr } from "../../controllers/user/userController.js";
export const userRoutes = (app) => {
    // get all users
    app.get("/api/user/all", allUsers);
    // get single user
    app.get("/api/user/single-user/:id", singleUsr);
};

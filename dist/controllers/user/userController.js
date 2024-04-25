import createHttpError from "http-errors";
import { Auth } from "../../models/authModel/auth.model.js";
import { TryCatch } from "../../utils/tryCatch.js";
// get all users
const allUsers = TryCatch(async (req, res, next) => {
    const users = await Auth.find({}).select("-password");
    return res.status(200).json({ users });
});
// get single user
const singleUser = TryCatch(async (req, res, next) => {
    const { id } = req.params;
    const user = await Auth.findById(id).select("-password");
    if (!user)
        return next(createHttpError(400, "user not found"));
    return res.status(200).json({ user });
});
// delete single user
const deleteUser = TryCatch(async (req, res, next) => {
    const { id } = req.params;
    const user = await Auth.findById(id);
    if (!user)
        return next(createHttpError(400, "user not found"));
    await user.deleteOne();
    return res.status(200).json({ user });
});
// update user role
const updateRole = TryCatch(async (req, res, next) => {
    const { role } = req.body;
    const { id } = req.params;
    const user = await Auth.findById(id);
    if (user && role) {
        user.role = role;
    }
    ;
    await user?.save();
    return res.status(200).json({ message: "user update successfully", success: true });
});
export { allUsers, singleUser, deleteUser, updateRole };

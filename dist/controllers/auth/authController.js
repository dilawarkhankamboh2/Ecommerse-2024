import { TryCatch } from "../../utils/tryCatch.js";
import createHttpError from "http-errors";
import { Auth } from "../../models/authModel/auth.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { config } from "../../config/config.js";
// register controller
const register = TryCatch(async (req, res, next) => {
    // get all body data
    const { _id, name, email, password, dob } = req.body;
    // validate user data
    if (!_id || !name || !email || !password || !dob) {
        return next(createHttpError(400, "All fields are required!"));
    }
    // check user email is already exists
    const emailExists = await Auth.exists({ email });
    if (emailExists) {
        return next(createHttpError(400, "This email is already taken"));
    }
    // hash password using bcrypt
    const hashPassword = await bcrypt.hash(password, 10);
    // create user
    const user = await Auth.create({ _id, name, email, password: hashPassword, dob });
    // create jwt token
    const token = jwt.sign(user._id, config.JWT_KEY);
    return res.json({ token: token });
});
// login 
const login = TryCatch(async (req, res, next) => {
    // get all body data
    const { _id, email, password } = req.body;
    // validate user data
    if (!_id || !email || !password) {
        return next(createHttpError(400, "All fields are required!"));
    }
    // match user
    const user = await Auth.findOne({ email });
    if (user) {
        // compare password
        const matchPwd = await bcrypt.compare(password, user.password);
        if (!matchPwd) {
            return res.status(400).json({ message: "Wrong username or password" });
        }
        const token = jwt.sign(user._id, config.JWT_KEY);
        return res.status(200).json({ message: "You are logged in", token: token });
    }
    return res.status(400).json({ message: "Opps please signin" });
});
export { register, login };

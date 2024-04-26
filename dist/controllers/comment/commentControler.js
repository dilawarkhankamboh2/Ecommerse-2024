import { Comment } from "../../models/commentModel/comments.model.js";
import { TryCatch } from "../../utils/tryCatch.js";
// create comments
const createComments = TryCatch(async (req, res, next) => {
    const { userId } = req.body;
    const { comment, productId } = req.body;
    const comments = await Comment.create({ userId, comment, productId });
    await comments.save();
    return res.status(201).json({ message: "Comment created" });
});
// get all comments
const allComments = TryCatch(async (req, res, next) => {
    const comments = await Comment.find({}).populate("userId", ["name", "email"]);
    return res.status(201).json(comments);
});
// delete comment
const deleteComment = TryCatch(async (req, res, next) => {
    const { id } = req.params;
    const comment = await Comment.findById(id);
    await comment?.deleteOne();
    return res.status(201).json({ message: "comment deleted" });
});
export { createComments, allComments, deleteComment };

export const TryCatch = (fun) => (req, res, next) => {
    return Promise.resolve(fun(req, res, next)).catch(next);
};

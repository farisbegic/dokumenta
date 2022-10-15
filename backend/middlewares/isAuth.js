const token = require("../helpers/token");

const isAuth = (req, res, next) => {
    try {
        const authHeader = req.get('Authorization');
        if (!authHeader) {
            throw new Error('Not authorized');
        }

        const accessToken = authHeader.split(' ')[1];
        const decodedToken = token.verifyAccessToken(accessToken);

        if (!decodedToken) {
            throw new Error('Not authorized');
        }

        req.user_id = decodedToken.id;

        next();
    } catch (err) {
        res.status(401).json({
            message: err.message
        });
    }
}

module.exports = isAuth;
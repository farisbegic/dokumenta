const jwt = require("jsonwebtoken");
const config = require("../config");

const signAccessToken = (userId) => {
    return jwt.sign({ id: userId }, config.secret_key, {
        expiresIn: "15d",
    });
};

const verifyAccessToken = (accessToken) => {
    return jwt.verify(accessToken, config.secret_key);
};


module.exports = {
    signAccessToken,
    verifyAccessToken,
};
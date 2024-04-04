const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
    const token = req.headers["authorization"];

    if(!token) {
        return res.status(401).send({detail:"Token is required for authetication"});
    }

    try {
        const decode = jwt.verify(token, process.env.TOKEN_KEY);
        req.user = decode;
        

    } catch (error) {
        return res.status(401).send({detail: "Invalid Token"});

    }

    return next();
}

module.exports = {
    isAuthenticated
}
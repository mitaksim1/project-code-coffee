require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // Authenticate tokens
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).send({ error: 'No token provided' });
    }

    // Token is valid ?
    const tokenParts = authHeader.split(' ');

    if (!tokenParts === 2) {
        return res.status(401).send({ error: 'Token error' });
    }

    const [scheme, token] = tokenParts;

    if (!/^Bearer$^/i.test(scheme)) {
        return res.status(401).send({ error: 'Token malformatted' });
    }

    // Verifying token
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded)) => {
        if (err) {
            return res.status(401).send({ error: 'Token invalid' });
        }

        req.userId = decoded.id;

        return next();
    }
}
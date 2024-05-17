const jwt = require('jsonwebtoken');
const { secret } = require('./authConfig');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        console.log('Token not provided');
        return res.status(401).json({ error: 'Token not provided' });
    }

    try {
        const decoded = jwt.verify(token.replace('Bearer ', ''), secret);
        console.log('Decoded Token:', decoded);

        req.user = decoded;

        next();
    } catch (error) {
        console.error('Error verifying token:', error);
        return res.status(401).json({ error: 'Invalid token' });
    }
};

module.exports = authMiddleware;

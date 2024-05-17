const jwt = require('jsonwebtoken');
const { secret } = require('./authConfig');


const isAdmin = (req, res, next) => {
    if (!req.user.isAdmin) {
        return res.status(403).json({ error: 'Access prohibited. This route is only allowed for administrators.' });
    }
    
    next();
};

module.exports = isAdmin ;

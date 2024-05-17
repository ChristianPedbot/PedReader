const jwt = require('jsonwebtoken');
const { secret } = require('./authConfig');

function generateToken(userId) {
  const payload = { userId };
  return jwt.sign(payload, secret, { expiresIn: '360000' }); 
}

function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded; 
  } catch (error) {
    throw new Error('Invalid token');
  }
}

module.exports = {
  generateToken,
  verifyToken,
};

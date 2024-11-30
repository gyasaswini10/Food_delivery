// middleware/authenticateJWT.js
const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) {
    return res.status(403).json({ message: 'Access denied' });
  }

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    req.userId = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authenticateJWT;

const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
  // Get the token from cookies
  const token = req.cookies.token;

  if (!token) {
    return res.status(403).json({ message: 'Access denied. No token provided.' });
  }

  try {
    // Verify the token using your JWT secret
    const decoded = jwt.verify(token, 'your_jwt_secret');
    
    // Attach the decoded user ID to the request object
    req.userId = decoded.userId;

    next();  // Proceed to the next middleware or route handler
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};

module.exports = authenticateJWT;

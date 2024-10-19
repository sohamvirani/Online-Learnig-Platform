const jwt = require("jsonwebtoken");
const secretKey = "MySecretKey";

const generateToken = (userData) => {
  return jwt.sign({ userData }, secretKey, { expiresIn: '1h' });
};

const validateToken = (token) => {
  return jwt.verify(token, secretKey);
};

const authorize = (req, res, next) => {
  const token = req.cookies.login_token;
  if (!token) {
    return res.status(401).json({ message: "Access denied, please log in" });
  }

  try {
    const decodedUser = validateToken(token);
    req.user = decodedUser;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token is invalid" });
  }
};

const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    const user = req.user;
    if (allowedRoles.includes(user.userData.role)) {
      return next();
    }
    return res.status(403).json({ message: "Access forbidden: insufficient privileges" });
  };
};

module.exports = { generateToken, validateToken, authorize, authorizeRoles };

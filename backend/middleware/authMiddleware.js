const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  try {
    const token = req.header("Authorization");

    if (!token) {
      return res.status(401).json({
        message: "No token found"
      });
    }

    const decoded = jwt.verify(
      token.replace("Bearer ", ""),
      process.env.JWT_SECRET
    );

    req.user = decoded.id;

    next();
  } catch (error) {
    res.status(401).json({
      message: "Unauthorized"
    });
  }
};

module.exports = protect;
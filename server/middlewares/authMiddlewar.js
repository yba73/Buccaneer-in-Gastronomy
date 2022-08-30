const jwt = require("jsonwebtoken");
exports.authMilddleware = async (req, res, next) => {
  try {
    const token = req.headers.token;
    console.log("token");
    if (!token) return res.status(401).json({ msg: "you are not authorized." });
    const verifyToken = await jwt.verify(token, process.env.JWT_SECRT);
    req.userId = verifyToken.sub;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: error });
  }
};

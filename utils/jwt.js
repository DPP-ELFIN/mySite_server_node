/** @format */

const jwt = require("jsonwebtoken");

const { promisify } = require("util");

const sign = promisify(jwt.sign);
const verify = promisify(jwt.verify);

module.exports.createToken = async (userInfo) => {
  return await sign({ userInfo }, "a76c7437-e36e-43b7-92f2-483e0ac53ed3", { expiresIn: 60 * 60 * 24 });
};

module.exports.verifyToken = async (req, res, next) => {
  if (req.headers.device) return next();
  if (!req.headers.token) return res.status(401).json({ error: "身份验证失败！" });
  const token = req.headers.token.split("Bearer ")[1];
  if (!token) {
    res.status(401).json({ error: "身份验证失败！" });
  }
  try {
    let userinfo = await verify(token, "a76c7437-e36e-43b7-92f2-483e0ac53ed3");
    req.user = userinfo;
    next();
  } catch (error) {
    res.status(401).json({ error: "身份验证失败！" });
  }
};

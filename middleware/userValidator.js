/** @format */

const { body } = require("express-validator");
const validation = require("./errorBack");
const { User } = require("../model/index");

module.exports.register = validation([
  body("username")
    .notEmpty()
    .withMessage("用户名不能为空")
    .bail()
    .isLength({ min: 3 })
    .withMessage("用户名长度不能小于3")
    .bail()
    .custom(async (val) => {
      const dbback = await User.findOne({ username: val });
      if (dbback) {
        return Promise.reject("用户名已被注册");
      }
    }),
  body("password").notEmpty().withMessage("密码不能为空").bail().isLength({ min: 6 }).withMessage("密码长度不能小于6").bail(),
  //   body("email").custom(async (val) => {
  //     if (!val) return;
  //     const dbback = await User.findOne({ email: val });
  //     if (dbback) {
  //       return Promise.reject("邮箱已被使用");
  //     }
  //   }),

  //   body("phone").custom(async (val) => {
  //     if (!val) return;
  //     const dbback = await User.findOne({ phone: val });
  //     if (dbback) {
  //       return Promise.reject("电话已被注册");
  //     }
  //   }),
]);

module.exports.login = validation([
  body("username")
    .notEmpty()
    .withMessage("用户名不能为空")
    .bail()
    .isLength({ min: 3 })
    .withMessage("用户名长度不能小于3")
    .bail()
    .custom(async (val) => {
      const dbback = await User.findOne({ username: val });
      if (!dbback) {
        return Promise.reject("未查询到该用户，请先注册");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("密码不能为空")
    .bail()
    .custom(async (val) => {
      const dbback = await User.findOne({ password: val });
      if (!dbback) {
        return Promise.reject("密码错误");
      }
    }),
]);

/** @format */
const { User } = require("../model/index");

/**
 *
 * @param {Request} req
 * @param {Response} res
 */

module.exports.login = (req, res, next) => {
  res.send("login");
};
module.exports.regist = (req, res, next) => {
  res.send("regist");
};

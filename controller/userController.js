/** @format */
const { User } = require("../model/index");
const { createToken } = require("../utils/jwt");

/**
 *
 * @param {Request} req
 * @param {Response} res
 */

module.exports.regist = async (req, res, next) => {
  //   console.log(req.body);
  const userModel = new User(req.body);
  const dbback = await userModel.save();
  // console.log(dbback);
  res.status(201).json(dbback);
};
module.exports.login = async (req, res, next) => {
  let dbback = await User.findOne(req.body);
  //   console.log(dbback);
  dbback = dbback.toJSON();
  dbback.token = await createToken(dbback);
  res.status(201).json(dbback);
};

/** @format */

const { Role } = require("../model/index");

/**
 *
 * @param {Request} req
 * @param {Response} res
 */
module.exports.getRole = async (req, res, next) => {
  //   const dbback = await Role.find();
  const dbback = await Role.findOne(req.query);
  //   dbback = dbback.toJSON();
  res.data = dbback;
  res.msg = dbback ? "查找成功" : "查找失败";
  next();
};
module.exports.setRole = async (req, res, next) => {
  const rolemodel = new Role(req.body);
  const dbbacbk = await rolemodel.save();
  res.data = dbbacbk;
  res.msg = "设置成功";
  res.status(201);
  next();
};
module.exports.updateRole = async (req, res, next) => {
  const dbback = await Role.findOneAndUpdate({ roleId: req.body.roleId }, req.body, { new: true });
  res.data = dbback;
  res.msg = "更新成功";
  next();
};
module.exports.deleteRole = async (req, res, next) => {
  const dbback = await Role.findOneAndDelete({ roleId: req.query.roleId });
  res.data = dbback;
  res.msg = "删除成功";
  next();
};

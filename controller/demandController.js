/** @format */

const { Demand } = require("../model/index");

/**
 *
 * @param {Request} req
 * @param {Response} res
 */
module.exports.getDemand = async (req, res, next) => {
  let dbb = await Demand.find(req.query);
  res.data = dbb;
  res.msg = "获取成功";
  res.status(200);
  next();
};

module.exports.addDemand = async (req, res, next) => {
  console.log(req.body);
  const demand = new Demand(req.body);
  const dbb = await demand.save();
  res.data = dbb;
  res.msg = "添加成功";
  res.status(201);
  next();
};

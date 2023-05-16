/** @format */

const { Demand } = require("../model/index");

/**
 *
 * @param {Request} req
 * @param {Response} res
 */

module.exports.editStatus = async (req, res, next) => {
  // console.log(req.body);
  const dbb = await Demand.findOneAndUpdate({ _id: req.body.id }, req.body, { new: true });
  res.msg = "修改成功";
  (res.data = dbb), res.status(201);
  next();
};

module.exports.delDemand = async (req, res, next) => {
  const dbb = await Demand.findByIdAndDelete({ _id: req.query.id });
  if (dbb) {
    res.data = dbb;
    res.msg = "删除成功";
    res.status(200);
  } else {
    res.status(204);
  }
  next();
};
module.exports.getDemand = async (req, res, next) => {
  let dbb = await Demand.find(req.query);
  res.data = dbb;
  res.msg = "获取成功";
  res.status(200);
  next();
};

module.exports.addDemand = async (req, res, next) => {
  const demand = new Demand(req.body);
  const dbb = await demand.save();
  res.data = dbb;
  res.msg = "添加成功";
  res.status(201);
  next();
};

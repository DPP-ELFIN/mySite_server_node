/** @format */

const { body } = require("express-validator");
const { Demand } = require("../model/index");
const validation = require("./errorBack");

module.exports.addDemandvali = validation([
  body("name").custom(async (val) => {
    const dbb = await Demand.findOne({ name: val });
    if (dbb) return Promise.reject("该需求已存在！");
  }),
]);

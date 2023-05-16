/** @format */

const mongoose = require("mongoose");

const demandModel = new mongoose.Schema({
  about: {
    type: Number,
    require: true, //0 前端页面，1、cms  2、server
  },
  name: {
    type: String,
    require: true,
  },
  createTime: {
    type: Date,
    default: Date.now(),
  },
  time: {
    type: Date,
    require: true,
  },
  overTime: {
    type: Date,
    default: null,
  },
  person: {
    type: Array,
    default: [],
  },
  remark: {
    type: String,
    default: "",
  },
  status: {
    type: Number,
    default: 0, //0 开发中，1 已完成， 2 bug
  },
});

module.exports = demandModel;

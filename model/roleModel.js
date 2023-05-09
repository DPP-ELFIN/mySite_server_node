/** @format */

const mongoose = require("mongoose");

const roleModel = new mongoose.Schema({
  roleId: {
    type: Number,
    default: 2,
    require: true,
  },
  powerList: {
    type: Array,
    default: ["*"],
  },
});

module.exports = roleModel;

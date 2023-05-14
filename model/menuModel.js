/** @format */

const mongoose = require("mongoose");

const menuModel = new mongoose.Schema({
  icon: {
    type: String,
    default: "",
  },
  parentId: {
    type: Number,
    default: 0,
    require: true,
  },
  nodeId: {
    type: Number,
    default: 0,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  component: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    require: true,
  },
  children: {
    type: Array,
    default: [],
  },
  meta: {
    type: Object,
    default: {},
  },
//   children:{
//     type:Array,
//     default:[]
//   },
  meta:{
    type:Object,
    default:{}
  }
});

module.exports = menuModel;

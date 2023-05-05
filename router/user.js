/** @format */

const express = require("express");
const { login, regist } = require("../controller/userController");

const user = express.Router();

user.post("/login", login);
user.post("/regist", regist);

module.exports = user;

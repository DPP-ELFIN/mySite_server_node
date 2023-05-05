/** @format */

const express = require("express");
const { login, regist } = require("../controller/userController");
const validator = require("../middleware/userValidator");

const user = express.Router();

user.post("/login", validator.login, login);
user.post("/regist", validator.register, regist);

module.exports = user;

/** @format */

const express = require("express");

const user = express.Router();

user.get("/login", (req, res) => {
  res.send("/login");
});

module.exports = user;

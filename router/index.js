/** @format */

const express = require("express");
const user = require("./user");
const role = require("./role");

const router = express.Router();
router.use("/user", user);
router.use("/role", role);

module.exports = router;

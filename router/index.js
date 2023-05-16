/** @format */

const express = require("express");
const user = require("./user");
const role = require("./role");
const demand = require("./demand");

const router = express.Router();
router.use("/user", user);
router.use("/role", role);
router.use("/demand", demand);

module.exports = router;

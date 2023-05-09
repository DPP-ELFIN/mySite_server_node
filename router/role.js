/** @format */

const express = require("express");
const { verifyToken } = require("../utils/jwt");
const { getRole, setRole } = require("../controller/roleController");
const router = express.Router();

router.get("/getRole", verifyToken, getRole);
router.post("/setRole", verifyToken, setRole);

module.exports = router;

/** @format */

const express = require("express");
const { verifyToken } = require("../utils/jwt");
const { getRole, setRole, updateRole, deleteRole } = require("../controller/roleController");
const router = express.Router();

router.get("/getRole", verifyToken, getRole);
router.post("/setRole", verifyToken, setRole);
router.post("/updateRole", verifyToken, updateRole);
router.delete("/deleteRole", verifyToken, deleteRole);

module.exports = router;

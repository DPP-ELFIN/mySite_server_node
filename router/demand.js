/** @format */

const express = require("express");
const { verifyToken } = require("../utils/jwt");
const { addDemand, getDemand, delDemand, editStatus } = require("../controller/demandController");
const { addDemandvali } = require("../middleware/demandValidator");

const router = express.Router();

router.post("/addDemand", verifyToken, addDemandvali, addDemand);
router.post("/editStatus", verifyToken, editStatus);
router.get("/getDemand", verifyToken, getDemand);
router.delete("/delDemand", verifyToken, delDemand);

module.exports = router;

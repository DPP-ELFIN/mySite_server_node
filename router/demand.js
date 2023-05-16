/** @format */

const express = require("express");
const { verifyToken } = require("../utils/jwt");
const { addDemand, getDemand } = require("../controller/demandController");
const { addDemandvali } = require("../middleware/demandValidator");

const router = express.Router();

router.post("/addDemand", verifyToken, addDemandvali, addDemand);
router.get("/getDemand", verifyToken, getDemand);

module.exports = router;

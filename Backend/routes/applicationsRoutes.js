const express = require("express");
const router = express.Router();
const applicationsController = require("../controllers/applicationsController");
const authMiddleware = require('../middlewares/authMiddleware');

router.post("/apply", authMiddleware, applicationsController.createApplication);

module.exports = router;


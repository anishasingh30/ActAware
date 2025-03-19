const express = require("express");
const router = express.Router();
const applicationsController = require("../controllers/applicationsController");

router.post("/", applicationsController.createApplication);

module.exports = router;

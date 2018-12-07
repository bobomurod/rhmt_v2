const express = require("express");
const router = express.Router();

const holder_controller = require("../controllers/test.controller");

router.get("/test", test_controller);

module.exports = router;

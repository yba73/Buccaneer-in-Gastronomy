const express = require("express");
const { register } = require("../controllers/userControllers");
const router = express.Router();

router.post("/login");
router.post("/register", register);

module.exports = router;

const express = require("express");
const router = express.Router();
const userController = require("../Controller/LoginController");

router.post("/login", userController.login);

module.exports = router;
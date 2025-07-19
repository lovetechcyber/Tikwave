const express = require("express");
const router = express.Router();
const authCtrl = require("../controllers/authController");

router.post("/register", authCtrl.register);
router.post("/login", authCtrl.login);
router.get("/refresh", authCtrl.refreshToken);
router.post("/logout", authCtrl.logout);

module.exports = router;

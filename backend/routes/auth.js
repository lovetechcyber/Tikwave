const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {
  const { email } = req.body;
  const user = { id: 1, email };

  const accessToken = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "15m" });
  const refreshToken = jwt.sign(user, process.env.JWT_REFRESH_SECRET, { expiresIn: "7d" });

  res.cookie("access_token", accessToken, {
    httpOnly: true,
    secure: false,
    maxAge: 15 * 60 * 1000,
  });

  res.cookie("refresh_token", refreshToken, {
    httpOnly: true,
    secure: false,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.json({ message: "Logged in" });
});

router.post("/logout", (req, res) => {
  res.clearCookie("access_token");
  res.clearCookie("refresh_token");
  res.json({ message: "Logged out" });
});

module.exports = router;

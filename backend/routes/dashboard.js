const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");

router.get("/", verifyToken, (req, res) => {
  res.json({
    balances: {
      main: 2458320,
      savings: 845600,
      investments: 1230450,
    },
    transactions: [
      { title: "Marketplace Purchase", amount: -12500, time: "Today, 10:24 AM", type: "debit" },
      { title: "Salary Deposit", amount: 350000, time: "Yesterday, 9:00 AM", type: "credit" },
    ],
    markets: [
      { name: "NGN/USD", price: "₦ 1,150", change: "-2.4%", isUp: false },
      { name: "Gold", price: "₦ 32,450", change: "+1.8%", isUp: true },
    ]
  });
});

module.exports = router;

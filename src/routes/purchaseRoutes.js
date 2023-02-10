const express = require("express")
const router = express.Router()

const purchaseViewModel = require("../viewModels/purchaseViewModel");

router.get("/recentlyJoined/getPurchase", purchaseViewModel.getPurchase);
router.get("/recentlyJoined/getPurchases", purchaseViewModel.getPurchases);
router.post("/recentlyJoined/makePurchase", purchaseViewModel.makePurchase);

module.exports = router
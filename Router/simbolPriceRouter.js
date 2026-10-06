const express = require("express");
const { symbolPriceTicker } = require("../controller/simbolPriceTicketer");
const { Candlestick } = require("../controller/Candlestick");


const router = express.Router();

router.get("/symbol-price", symbolPriceTicker);
router.get("/candlestick", Candlestick)
module.exports = router;
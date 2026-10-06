const express = require("express")
const symbolPriceTicker = require("./Router/simbolPriceRouter");
const app = express();

PORT = 3000

app.use("/api", symbolPriceTicker);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
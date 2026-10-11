const express = require("express");
const cors = require("cors");
const symbolPriceTicker = require("./Router/simbolPriceRouter");
const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

// routes
app.use("/api", symbolPriceTicker);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
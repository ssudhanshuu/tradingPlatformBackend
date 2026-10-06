const axios = require("axios");

const symbolPriceTicker = async (req, res) => {
    try {
        const { symbol } = req.query;

        if (!symbol) {
            return res.status(400).json({
                success: false,
                message: "Symbol is required"
            });
        }

        const response = await axios.get(
            "https://api.binance.com/api/v3/ticker/price",
            {
                params: {
                    symbol: symbol.toUpperCase()
                }
            }
        )
        return res.status(200).json({
            success: true,
            data: response.data
        });

    } catch (error) {
        console.error(error.message);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch market price"
        });
    }
};

module.exports = {
    symbolPriceTicker
};
const axios = require("axios");

const Candlestick = async (req, res) => {
    try {
        const { interval, symbol } = req.query;

        if (!symbol || !interval) {
            return res.status(400).json({
                success: false,
                message: "interval and symbol are required"
            });
        }

        const response = await axios.get(
            "https://api.binance.com/api/v3/klines",
            {
                params: {
                    symbol: symbol.toUpperCase(),
                    interval: interval
                }
            }
        );
        const transformedData = response.data.map((item) => ({
            time: item[0],
            open: Number(item[1]),
            high: Number(item[2]),
            low: Number(item[3]),
            close: Number(item[4]),
            volume: Number(item[5])
        }));

        return res.status(200).json({
            success: true,
            data: transformedData
        });

    } catch (error) {
        console.error(error.message);

        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
};

module.exports = {
    Candlestick
};
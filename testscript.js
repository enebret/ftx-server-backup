const axios = require ('axios');
const { Console } = console; 
const fs = require("fs");
const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');
const logger = new Console(output, errorOutput);
const url = "https://api.coingecko.com/api/v3/coins/"
async function getCoin () {
    try {
        const btcReturnedPrice = await axios.get(url+"solana?tickers=true");
            //const btcPrice = parseFloat(btcReturnedPrice.market_data.current_price.usd);
            logger.log(btcReturnedPrice.data)
            const btcPrice = parseFloat(btcReturnedPrice.data.market_data.current_price.usd);
            const btcLogo = btcReturnedPrice.data.image.small;
            const marketCAp = btcReturnedPrice.data.market_data.market_cap.usd;
            const totalVol = btcReturnedPrice.data.market_data.total_volume.usd;
            const twentyFourHourHigh = btcReturnedPrice.data.market_data.high_24h.usd;
            const twentyFourHourLow = btcReturnedPrice.data.market_data.low_24h.usd;
            let USDollar = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            });

            console.log(USDollar.format(marketCAp))
    } catch (error) {
        console.log(error)
    }
}

//getCoin()
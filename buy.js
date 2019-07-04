const binance = require('node-binance-api')().options({
    APIKEY: '',
    APISECRET: '',
    useServerTime: true // If you get timestamp errors, synchronize to server time at startup
});

function buy() {
    var quantity = 1000000, price = 0.00000020;
    binance.buy("ERDBTC", quantity, price);
}

setInterval(buy, 110);

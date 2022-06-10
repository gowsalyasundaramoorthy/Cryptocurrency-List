async function cryptoCurrency() {

    // var tablBody = document.getElementById("tabl_body");
    const config = { headers: { Accept: 'application/json' } }
    var url = 'https://api.coinlore.net/api/tickers/';
    const res = await axios.get(url);

    var findCrypto = "";

    for (i = 0; i < res.data.data.length; i++) {
        var result = res.data.data[i];
        console.log(result);


        findCrypto += "<tr><td>" + result.rank + "</td>" +
            "<td>" + result.name + " <span class='crypto-symbol'>" + result.symbol + "</span></td>" +
            "<td>" + result.price_usd + "</td>" +
            "<td>" + result.percent_change_24h + "</td>" +
            "<td>" + result.percent_change_7d + "</td>" +
            "<td>" + result.market_cap_usd + "</td>" +
            "<td>" + result.volume24 + "</td>" +
            "<td>" + result.csupply + "</td></tr>";

    }

    document.getElementById("table_body").innerHTML = findCrypto;




}

cryptoCurrency();
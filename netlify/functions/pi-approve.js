<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Gold & Crypto</title>
</head>

<body style="background:black;color:white;text-align:center">

<h2>Loading...</h2>

<script>

// يظهر الخطأ بدل الشاشة البيضاء
window.onerror = function(msg) {
    document.body.innerHTML = "<h2 style='color:red'>" + msg + "</h2>";
};

document.addEventListener("DOMContentLoaded", function() {

    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd")
    .then(res => res.json())
    .then(data => {

        document.body.innerHTML = `
        <h1>Live Prices</h1>
        <p>BTC: ${data.bitcoin.usd} $</p>
        <p>ETH: ${data.ethereum.usd} $</p>
        `;

    })
    .catch(err => {
        document.body.innerHTML = "<h2 style='color:red'>API ERROR</h2>";
        console.log(err);
    });

});

</script>

</body>
</html>

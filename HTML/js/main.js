const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

btn.addEventListener('click', () =>{
    nav.classList.toggle('menu-open');
});

var btc = document.getElementById("bitcoin");
var apc = document.getElementById("apecoin");
var eth = document.getElementById("ethereum");
var ltc = document.getElementById("litecoin")

var liveprice = {
    "async" : true,
    "scrossDomain": true,
    "url" : "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Capecoin%2Cethereum%2Clitecoin&vs_currencies=usd",

    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function(response) {
    console.log(response);
    btc.innerHTML = response.bitcoin.usd;
    apc.innerHTML = response.apecoin.usd;
    eth.innerHTML = response.ethereum.usd;
    ltc.innerHTML = response.litecoin.usd;
});
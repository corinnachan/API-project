var generatorButton = document.querySelector(".generator-btn");
var fxButton = document.querySelector(".fx-btn");
var cityResults = document.querySelector("#location");
var fxResults = document.querySelector("#fx");
var url = "https://restcountries.eu/rest/v2/all";
var url2 = "https://api.exchangeratesapi.io/latest?";
var randomCountryNum = 60;
var fxRate = "";
var cityName = "";
var newCurrency = "";
var baseCurrency = "GBP";


/*** Part 1 - Get city suggestion ***/

generatorButton.addEventListener("click",getDestination);

function getDestination () {


  var xhr = new XMLHttpRequest;
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var responseData = JSON.parse(xhr.response);
      // console.log(responseData);

  //generate randomCountryNum
  randomCountryNum = Math.floor(Math.random() * Math.floor(250));

  //get city name from xhr response

  cityName = responseData[randomCountryNum].capital;
  newCurrency = responseData[randomCountryNum].currencies[0].code;

  //use DOM manipulation to display cityName in html

  cityResults.innerHTML =
    "You should go to " + cityName + ", and the currency they use is " + newCurrency + "!";



}
};

xhr.open("GET",url,true);
xhr.send();
};

/*** Part 2 - Get foreign exchange info ***/

//creating API call for fx rates based on city generated

fxButton.addEventListener("click",getFx);

function getFx () {
  var xhr = new XMLHttpRequest;
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var responseData = JSON.parse(xhr.response);

  //get fx based on city returned above vs home currency

  fxRate = responseData.rates[newCurrency];
  console.log(fxRate);

  //use DOM manipulation to display rate in html

  if (fxRate === undefined) {

    fxResults.innerHTML = "Sorry the currency is too exotic to convert!";
  } else {
    fxResults.innerHTML = "1 GBP today is equal to " + fxRate + " in local currency";
  }
};
};
  xhr.open("GET",url2 + "base=" + baseCurrency, true);
  xhr.send();
};

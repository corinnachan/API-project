var generatorButton = document.querySelector(".generator-btn");
//test url = "http://wikitravel.org/wiki/en/api.php?action=query&format=json&pageids=1364"
var url = "http://wikitravel.org/wiki/en/api.php?action=query&format=json&pageids=";

generatorButton.addEventListener("click",getDestination);

function getDestination () {
  //creating a random number for pageids first

  let randomPageId = Math.floor(Math.random() * 10000);

  //now creating XMLHttpRequest

  var xhr = new XMLHttpRequest;
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let responseData = JSON.parse(xhr.responseText)



    }
  };

  xhr.open("GET",url + randomPageId,true);
  xhr.send();
}

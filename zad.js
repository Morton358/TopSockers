function loadStrzelcy() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     myFunc(this.responseText);
     }
    else {
      document.getElementById("error").innerHTML = this.statusText;
    }
  };
  xhttp.open("GET", "https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/serie-a/seasons/15-16/topscorers", true);
  xhttp.setRequestHeader("X-Mashape-Key", "kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw");
  xhttp.send();
}

function myFunc(jsonStr) {
  var obj = JSON.parse(jsonStr);
  var elements = obj.data.topscorers;
  var table = "<tr><th>Pozycja</th><th>Zawodnik</th><th>Gole</th></tr>";
  for (i = 0; i < elements.length; i++){
    var strzelca = elements[i];
    table += "<tr><td>" + String(i + 1) + "</td><td>" + strzelca.fullname + "</td><td>" + strzelca.goals + "</td></tr>";
  }
  document.getElementById("output").innerHTML = table;
}


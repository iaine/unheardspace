var map;
function createMap(div, lat, lon, depth) {
    //'map'
    map = L.map(div).setView([lat, lon], depth);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

}

function getColour(colour) {
    const tags = {
        'wifi': "blue",
        'bluetooth': 'yellow',
        'location': "red", 
        'ble': 'green'
      };

      return tags[colour];
}

function setCircle (markers) {
    markers.forEach(function(x) { 
        L.circle([ x['lat'], x['lon']]).addTo(map)
    });
}

function setCircleColours (markers) {
    markers.forEach(function(x) { 
        L.circle([ x['lat'], x['lon']], 20, {color: getColour(x["cat"]), opacity:.5, radius:0.75}).bindPopup(x["name"]).addTo(map)
    });
}

function createTable (data) {
    var table = document.getElementsByTagName("TABLE");
    var div = document.getElementById('datatable');
    div.style.border = '1px solid black';
    table = "<table><tr><td>Name</td><td>Decibels</td><td>Category</td><td>" 
    //{"time":"1680541253185","name":" FMB130_2471582_LE","decibels":"-103","lat":52.4104,"lon":-1.5213,"cat":"ble","new_decibels":[5.15]}
    data.forEach(d => table += "<tr><td>" + d["name"] + "</td><td>" + d["decibels"] + "</td><td>" + d["cat"] + "</td><td>" )
    div.innerHTML += table + "</table>";
}
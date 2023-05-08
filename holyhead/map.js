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
        'location': "red"
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
        L.circle([ x['lat'], x['lon']], 20, {color: getColour(x["cat"]), opacity:.5}).bindPopup(x["name"]).addTo(map)
    });
}
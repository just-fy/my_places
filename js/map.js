// import leaflet; P49VVH3GnH53vEv
console.log(L);
const mymap = L.map('mapid').setView([51.505, -0.09], 13);
console.log(mymap);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYW5hc3Rhc2lhMjYiLCJhIjoiY2p0aHAwemdoMGRlMzQ0bnpxNGU2d2NiNCJ9.o9ihqy33NiN3lE9xSfP2MA'
}).addTo(mymap);
const marker = L.marker([51.5, -0.09]).addTo(mymap);
const circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
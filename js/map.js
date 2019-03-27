// P49VVH3GnH53vEv
//import * as L from "leaflet";
//const L = require("leaflet");

window.onload = function () {
    const mymap = L.map('mapid').setView([51.505, -0.09], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiYW5hc3Rhc2lhMjYiLCJhIjoiY2p0aHAwemdoMGRlMzQ0bnpxNGU2d2NiNCJ9.o9ihqy33NiN3lE9xSfP2MA'
    }).addTo(mymap);

    const myIcon = L.icon({
        iconUrl: 'https://img.icons8.com/color/48/000000/place-marker.png',
        iconSize: [48, 48],
        iconAnchor: [-7, 10],
        popupAnchor: [31, 0]
    });

    const marker = L.marker([51.5, -0.09], {icon: myIcon}).addTo(mymap);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

    mymap.on('click', addMarker);
    function addMarker(e){
        const newMarker = L.marker(e.latlng, {icon: myIcon}).addTo(mymap);
        newMarker.bindPopup("<p>Hello, I'm a new popup</p>").openPopup();
    }
};
// Add console.log to check to see if our code is working.
console.log("working");

let home = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "light-v10",
    accessToken: API_KEY
});
// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// Create the map object with a center and zoom level. useful vs other method when needing to add multiple layers or a background image.
var map = L.map("mapid", {
    center: [34.0522, -118.2437],
    zoom: 14,
    layers: [home]
    });

// We create the tile layer that will be the background of our map.
let streets_light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "light-v10",
    accessToken: API_KEY
});

let streets_dark = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "dark-v10",
    accessToken: API_KEY
});

var baseMaps = {
    Light: streets_light,
    Dark: streets_dark
};


    //  Add a marker to the map for Los Angeles, California.
var marker = L.circle([34.0522, -118.2437], {
    color: 'yellow',
    fillOpacity: 0.25,
    radius: 300
}).addTo(map);

// Then we add our 'graymap' tile layer to the map.
L.control.layers(baseMaps).addTo(map);

// streets_dark.addTo(map);
// streets_light.addTo(map);
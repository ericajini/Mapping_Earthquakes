// // Add console.log to check to see if our code is working.
// //console.log("working");

// let home = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: "light-v10",
//     accessToken: API_KEY
// });
// // Create the map object with a center and zoom level.
// // let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// // Create the map object with a center and zoom level. useful vs other method when needing to add multiple layers or a background image.
// // var map = L.map("mapid", {
// //     center: [34.0522, -118.2437],
// //     zoom: 14,
    
// //     });




//     //  Add a marker to the map for Los Angeles, California.
// // An array containing each city's location, state, and population.
let cities = [{
    location: [40.7128, -74.0059],
    city: "New York City",
    state: "NY",
    population: 8398748
},
{
    location: [41.8781, -87.6298],
    city: "Chicago",
    state: "IL",
    population: 2705994
},
{
    location: [29.7604, -95.3698],
    city: "Houston",
    state: "TX",
    population: 2325502
},
{
    location: [34.0522, -118.2437],
    city: "Los Angeles",
    state: "CA",
    population: 3990456
},
{
    location: [33.4484, -112.0740],
    city: "Phoenix",
    state: "AZ",
    population: 1660272
}];
// var cityMarkers = [];


// // loop through the cities array and create one marker for each city
// // for (var i = 0; i < cities.length; i++) {
// //     // loop through the cities array, create a new marker, push it to the cityMarkers array
// //     cityMarkers.push(
// //         L.circleMarker(cities[i].location, {
// //             radius: cities[i].population/100000,
// //             color: "orange"
// //         }).bindPopup(("<h2>" + cities[i].city + "," + " " + cities[i].state + "</h2>") + ("<h3>" + "Population:" + " " + cities[i].population.toLocaleString() + "</h3>"))
// //     );
// // }
// // console.log(cityMarkers)

// //// cities.forEach(function(city) {
// //     console.log(city)
// //     L.marker(city.location).addTo(map);
// // });
// // // Loop through the cities array and create one marker for each city.

// // Add all the cityMarkers to a new layer group.
// // Now we can handle them as one group instead of referencing each individually
// var cityLayer = L.layerGroup(cityMarkers);

// // We create the tile layer that will be the background of our map.
// var streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY
// });

// var dark = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//     maxZoom: 18,
//     id: "dark-v10",
//     setStyle: {color:'orange'},
    
//     accessToken: API_KEY
// });


// var baseMaps = {
//     Streets_Light: streets,
//     Dark: dark
// };

// var overlayMaps = {
//     Cities: cityLayer
// };

// var map = L.map("mapid", {
//     center: [36.1733, -120.1794],
//     zoom: 7,
//     layers:[streets,cityLayer]
//     });

// // Coordinates for each point to be used in the line.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790]
// ];

// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: "red"
// }).addTo(map);
// // Then we add our 'graymap' tile layer to the map.
// L.control.layers(baseMaps,overlayMaps).addTo(map);

// // streets_dark.addTo(map);
// // streets_light.addTo(map);

let map = L.map('mapid').setView([40.7, -94.5], 4);
// SFO airport to JFK with 2 stops in between (San Antonio and Detroit)
let line = [
    [37.6213, -122.3790],
    [29.5312, -98.4683],
    [42.2162, -83.3554],
    [40.6413, -73.7781]
];

L.polyline(line, {
    color: "blue",
    dashArray: "5,5",
    weight: 4,
    opacity: 0.5
}).addTo(map);

let cityData = cities;

cities.forEach(function(city) {
    console.log(city)
});

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});


streets.addTo(map);
// function with initMap coming from callback=initMap in API link below
function initMap(){
// geting map ID from div above
    var map = new google.maps.Map(document.getElementById("map"), {
// default zoom and some coordinates
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });
// labels created so we can use markers, each individual letter will appear on the markers
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// LOCATION LATITUDE AND LONGITUDE
    var locations = [
    { lat: 40.785091, lng: -73.968285 },
    { lat: 41.084045, lng: -73.874245 },
    { lat: 40.754932, lng: -73.984016 }
    ];

// iterating through array and sssigning it to letters from string
// .map is a JS method, nothing to do with google maps, works as 
// forEach function, difference is that it returns an array with 
// results of eacj location in locations array
// .map method can take up to 3 arguments
// location - is current value where we are as we are looping though locations
// i - is index number where we are in the labels array

    var markers = locations.map(function(location, i){
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    new MarkerClusterer(map, markers, {
        imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });        
};




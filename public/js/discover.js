/* 
 * Client-side JS module for discover.
 */
 
console.log("Loaded Discover jQuery!");

/* Define Global Variables */
var map;
var geocoder;
var defaultCenter;
var searchMarker;

/* Initialize GMaps in Discover */
function initMap(event) {
	/* Init Global Variables */
	map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 11,
	  center: {lat: 32.88, lng: -117.24}
	});

	geocoder = new google.maps.Geocoder();
	defaultCenter = new google.maps.LatLng(32.883624, -117.252866);
	
	/* Init the searchZip Marker so that we don't create new markers for each query */
	searchMarker = new google.maps.Circle({
	  center: defaultCenter,
	  radius: 15000,
	  strokeColor: "#0000FF",
	  strokeOpacity: 0.8,
	  strokeWeight: 2,
	  fillColor: "#0000FF",
	  fillOpacity: 0.2,
	  map: resultsMap,
	  //position: results[0].geometry.location
	});


	var marker = new google.maps.Marker({position:defaultCenter});
	var contentString = '<div id="content">'+
	  '<div id="siteNotice">'+
	  '</div>'+
	  '<h1 id="firstHeading" class="firstHeading">Sparkling Clean Beach</h1>'+
	  '<div id="bodyContent">'+
	  '<p><b>Sparkling Clean Beach</b>, Please join us and clean up this beach! ' +
	  '<a href=/project/trending/2 <p>Join!</p> </a> '+
	  '</div>'+
	  '</div>';
	
	var infowindow = new google.maps.InfoWindow({
	content: contentString
	});
	
	marker.addListener('click', function() {
	infowindow.open(map, marker);
	});

	var MyLocationCircle = new google.maps.Circle({
	  center: defaultCenter,
	  radius: 15000,
	  strokeColor: "#0000FF",
	  strokeOpacity: 0.8,
	  strokeWeight: 2,
	  fillColor: "#0000FF",
	  fillOpacity: 0.2,
	});

	MyLocationCircle.setMap(map);
	marker.setMap(map);
	console.log("Default Center 1 = " + defaultCenter);
}


function searchZipCode(event, geocoder, resultsMap) {
	var address = document.getElementById('address').value;
	geocoder.geocode({'address': address}, function(results, status) {
		if (status === 'OK') {
			//console.log("hello" + results[0].geometry.location);
			var locationQuery = results[0].geometry.location;
			resultsMap.setCenter(locationQuery); // Recenter the map at locationQuery
			// Place a circle at locationQuery
			var marker = new google.maps.Circle({
			  center: locationQuery,
			  radius: 15000,
			  strokeColor: "#0000FF",
			  strokeOpacity: 0.8,
			  strokeWeight: 2,
			  fillColor: "#0000FF",
			  fillOpacity: 0.2,
			  map: resultsMap,
			  position: locationQuery
			});
			console.log("this is the location query " + locationQuery);
		} 
		else {
			alert('Geocode was not successful for the following reason: ' + status);
		}
	});
}

console.log("Default Center 2 = " + defaultCenter);

$("#submit").click(function() {
	//console.log("Clicked Submit!");
	searchZipCode(event, geocoder, map);
});
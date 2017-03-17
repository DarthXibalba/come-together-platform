/* 
 * Client-side JS module for discover.
 */
 
console.log("Loaded Discover jQuery!");

/* Define Global Variables */
var map;
var geocoder;
var highlightColor = "#0000FF";
var trendingColor = "#008000";

/* Initialize GMaps in Discover */
function initMap(event) {
	map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 11,
	  center: {lat: 32.88, lng: -117.24}
	});

	/* PLEASE FORGIVE MY HARDCODING, THERE'S NOT ENOUGH TIME */
	/* HIGHLIGHT PROJECTS */
	var centerH0 = new google.maps.LatLng(32.877358, -117.211757);
	var radiusH0 = 800;
	var markerH0 = new google.maps.Marker({position:centerH0});
	var circleH0 = new google.maps.Circle({
	  center: centerH0,
	  radius: radiusH0,
	  strokeColor: highlightColor,
	  strokeOpacity: 0.8,
	  strokeWeight: 2,
	  fillColor: highlightColor,
	  fillOpacity: 0.2,
	});

	var contentH0 = '<div id="content">'+
	  '<h4>Geometry Playground</h4>'+
	  '<a href=/project/highlights/0>'+
	  '<p>Project Page</p></a></div>';
	var infowindowH0 = new google.maps.InfoWindow({
		content: contentH0
	});
	markerH0.addListener('click', function() {
		infowindowH0.open(map, markerH0);
	});
	markerH0.setMap(map);
	circleH0.setMap(map);


	var centerH1 = new google.maps.LatLng(32.792474, -117.078431);
	var radiusH1 = 800;
	var markerH1 = new google.maps.Marker({position:centerH1});
	var circleH1 = new google.maps.Circle({
	  center: centerH1,
	  radius: radiusH1,
	  strokeColor: highlightColor,
	  strokeOpacity: 0.8,
	  strokeWeight: 2,
	  fillColor: highlightColor,
	  fillOpacity: 0.2,
	});
	var contentH1 = '<div id="content">'+
	  '<h4>Zensation</h4>'+
	  '<a href=/project/highlights/1>'+
	  '<p>Project Page</p></a></div>';
	var infowindowH1 = new google.maps.InfoWindow({
		content: contentH1
	});
	markerH1.addListener('click', function() {
		infowindowH1.open(map, markerH1);
	});
	markerH1.setMap(map);
	circleH1.setMap(map);



	var centerH2 = new google.maps.LatLng(32.742591, -117.001457);
	var radiusH2 = 6000;
	var markerH2 = new google.maps.Marker({position:centerH2});
	var circleH2 = new google.maps.Circle({
	  center: centerH2,
	  radius: radiusH2,
	  strokeColor: highlightColor,
	  strokeOpacity: 0.8,
	  strokeWeight: 2,
	  fillColor: highlightColor,
	  fillOpacity: 0.2,
	});
	var contentH2 = '<div id="content">'+
	  '<h4>Lost Pet Watch</h4>'+
	  '<a href=/project/highlights/2>'+
	  '<p>Project Page</p></a></div>';
	var infowindowH2 = new google.maps.InfoWindow({
		content: contentH2
	});
	markerH2.addListener('click', function() {
		infowindowH2.open(map, markerH2);
	});
	markerH2.setMap(map);
	circleH2.setMap(map);



	var centerH3 = new google.maps.LatLng(32.740608, -117.027370);
	var radiusH3 = 12200;
	var markerH3 = new google.maps.Marker({position:centerH3});
	var circleH3 = new google.maps.Circle({
	  center: centerH3,
	  radius: radiusH3,
	  strokeColor: highlightColor,
	  strokeOpacity: 0.8,
	  strokeWeight: 2,
	  fillColor: highlightColor,
	  fillOpacity: 0.2,
	});
	var contentH3 = '<div id="content">'+
	  '<h4>Mental Excellence</h4>'+
	  '<a href=/project/highlights/3>'+
	  '<p>Project Page</p></a></div>';
	var infowindowH3 = new google.maps.InfoWindow({
		content: contentH3
	});
	markerH3.addListener('click', function() {
		infowindowH3.open(map, markerH3);
	});
	markerH3.setMap(map);
	circleH3.setMap(map);



	var centerH4 = new google.maps.LatLng(32.947493, -117.225382);
	var radiusH4 = 4000;
	var markerH4 = new google.maps.Marker({position:centerH4});
	var circleH4 = new google.maps.Circle({
	  center: centerH4,
	  radius: radiusH4,
	  strokeColor: highlightColor,
	  strokeOpacity: 0.8,
	  strokeWeight: 2,
	  fillColor: highlightColor,
	  fillOpacity: 0.2,
	});
	var contentH4 = '<div id="content">'+
	  '<h4>Jazz For Education</h4>'+
	  '<a href=/project/highlights/4>'+
	  '<p>Project Page</p></a></div>';
	var infowindowH4 = new google.maps.InfoWindow({
		content: contentH4
	});
	markerH4.addListener('click', function() {
		infowindowH4.open(map, markerH4);
	});
	markerH4.setMap(map);
	circleH4.setMap(map);



	/* TRENDING PROJECTS */
	var centerT0 = new google.maps.LatLng(32.723953, -117.161584);
	var radiusT0 = 12500;
	var markerT0 = new google.maps.Marker({position:centerT0});
	var circleT0 = new google.maps.Circle({
	  center: centerT0,
	  radius: radiusT0,
	  strokeColor: trendingColor,
	  strokeOpacity: 0.8,
	  strokeWeight: 2,
	  fillColor: trendingColor,
	  fillOpacity: 0.2,
	});
	var contentT0 = '<div id="content">'+
	  '<h4>Open Freeway</h4>'+
	  '<a href=/project/trending/0>'+
	  '<p>Join Project!</p></a></div>';
	var infowindowT0 = new google.maps.InfoWindow({
		content: contentT0
	});
	markerT0.addListener('click', function() {
		infowindowT0.open(map, markerT0);
	});
	markerT0.setMap(map);
	circleT0.setMap(map);



	var centerT1 = new google.maps.LatLng(32.708499, -117.152743);
	var radiusT1 = 8000;
	var markerT1 = new google.maps.Marker({position:centerT1});
	var circleT1 = new google.maps.Circle({
	  center: centerT1,
	  radius: radiusT1,
	  strokeColor: trendingColor,
	  strokeOpacity: 0.8,
	  strokeWeight: 2,
	  fillColor: trendingColor,
	  fillOpacity: 0.2,
	});
	var contentT1 = '<div id="content">'+
	  '<h4>Pothole Repair Service</h4>'+
	  '<a href=/project/trending/1>'+
	  '<p>Join Project!</p></a></div>';
	var infowindowT1 = new google.maps.InfoWindow({
		content: contentT1
	});
	markerT1.addListener('click', function() {
		infowindowT1.open(map, markerT1);
	});
	markerT1.setMap(map);
	circleT1.setMap(map);
	


	var centerT2 = new google.maps.LatLng(32.634972, -117.136350);
	var radiusT2 = 4200;
	var markerT2 = new google.maps.Marker({position:centerT2});
	var circleT2 = new google.maps.Circle({
	  center: centerT2,
	  radius: radiusT2,
	  strokeColor: trendingColor,
	  strokeOpacity: 0.8,
	  strokeWeight: 2,
	  fillColor: trendingColor,
	  fillOpacity: 0.2,
	});
	var contentT2 = '<div id="content">'+
	  '<h4>Sparkling Clean Beach</h4>'+
	  '<a href=/project/trending/2>'+
	  '<p>Join Project!</p></a></div>';
	var infowindowT2 = new google.maps.InfoWindow({
		content: contentT2
	});
	markerT2.addListener('click', function() {
		infowindowT2.open(map, markerT2);
	});
	markerT2.setMap(map);
	circleT2.setMap(map);



	var centerT3 = new google.maps.LatLng(32.838390, -117.008151);
	var radiusT3 = 6400;
	var markerT3 = new google.maps.Marker({position:centerT3});
	var circleT3 = new google.maps.Circle({
	  center: centerT3,
	  radius: radiusT3,
	  strokeColor: trendingColor,
	  strokeOpacity: 0.8,
	  strokeWeight: 2,
	  fillColor: trendingColor,
	  fillOpacity: 0.2,
	});
	var contentT3 = '<div id="content">'+
	  '<h4>Letters to Elders</h4>'+
	  '<a href=/project/trending/3>'+
	  '<p>Join Project!</p></a></div>';
	var infowindowT3 = new google.maps.InfoWindow({
		content: contentT3
	});
	markerT3.addListener('click', function() {
		infowindowT3.open(map, markerT3);
	});
	markerT3.setMap(map);
	circleT3.setMap(map);



	var centerT4 = new google.maps.LatLng(32.910750, -117.139983);
	var radiusT4 = 4800;
	var markerT4 = new google.maps.Marker({position:centerT4});
	var circleT4 = new google.maps.Circle({
	  center: centerT4,
	  radius: radiusT4,
	  strokeColor: trendingColor,
	  strokeOpacity: 0.8,
	  strokeWeight: 2,
	  fillColor: trendingColor,
	  fillOpacity: 0.2,
	});
	var contentT4 = '<div id="content">'+
	  '<h4>Tutoring Refugee Children</h4>'+
	  '<a href=/project/trending/4>'+
	  '<p>Join Project!</p></a></div>';
	var infowindowT4 = new google.maps.InfoWindow({
		content: contentT4
	});
	markerT4.addListener('click', function() {
		infowindowT4.open(map, markerT4);
	});
	markerT4.setMap(map);
	circleT4.setMap(map);


















	/*
	var myCenter = new google.maps.LatLng(32.883624, -117.252866);
	var marker = new google.maps.Marker({position:myCenter});
	var myLatlng2 = new google.maps.LatLng(32.899696,-117.225666);
	var marker2 = new google.maps.Marker({position:myLatlng2});

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

	var contentString2 = '<div id="content2">'+
	  '<div id="siteNotice">'+
	  '</div>'+
	  '<h1 id="firstHeading" class="firstHeading">Pothole Repair Service</h1>'+
	  '<div id="bodyContent">'+
	  '<p><b>Pothole Repair Service</b>, Please join us and fix the pothole that are damaging our tires! ' +
	  '<a href=/project/trending/1 <p>Join!</p> </a> '+
	  '</div>'+
	  '</div>';
	  var infowindow2 = new google.maps.InfoWindow({
	    content: contentString2
	  });
	  marker2.addListener('click', function() {
	    infowindow2.open(map, marker2);
	  });

	var MyLocationCircle = new google.maps.Circle({
	  center: myCenter,
	  radius: 15000,
	  strokeColor: "#0000FF",
	  strokeOpacity: 0.8,
	  strokeWeight: 2,
	  fillColor: "#0000FF",
	  fillOpacity: 0.2,
	});

	MyLocationCircle.setMap(map);
	marker.setMap(map);
	marker2.setMap(map);
	*/

	geocoder = new google.maps.Geocoder();
}

function geocodeAddress(event, geocoder, resultsMap) {
	var address = document.getElementById('address').value;
	geocoder.geocode({'address': address}, function(results, status) {
		if (status === 'OK') {
		resultsMap.setCenter(results[0].geometry.location);
		console.log("hello" + results[0].geometry.location);
		var locationA = results[0].geometry.location;
		var marker = new google.maps.Circle({
		  center: locationA,
		  radius: 15000,
		  strokeColor: "#0000FF",
		  strokeOpacity: 0.8,
		  strokeWeight: 2,
		  fillColor: "#0000FF",
		  fillOpacity: 0.2,
		  map: resultsMap,
		  position: results[0].geometry.location
		});
		console.log("this is location A " + locationA);
		} else {
		alert('Geocode was not successful for the following reason: ' + status);
		}
	});
}


$("#submit").click(function() {
	console.log("Clicked Submit!");
	geocodeAddress(event, geocoder, map);
});
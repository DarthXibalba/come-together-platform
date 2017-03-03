/* 
 * Client-side JS module for discover.
 */

function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 11,
	  center: {lat: 32.88, lng: -117.24}
	});

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

	var geocoder = new google.maps.Geocoder();
	document.getElementById('submit').addEventListener('click', function() {
	  geocodeAddress(geocoder, map);
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
}

function geocodeAddress(geocoder, resultsMap) {
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
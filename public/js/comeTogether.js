/* 
 * Client-side JS module 
 * Cannot see any files outside of /public
 */

'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	//$("a.nameClick").click(replaceName);
}


function switchTabContent(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


/* TAB JQUERY CALLS */
$("#Tab_PastProject").click(function() {
    switchTabContent(event, 'PastProject');
});

$("#Tab_Trending").click(function() {
    switchTabContent(event, 'Trending');
});

$("#Tab_UserAbout").click(function() {
    switchTabContent(event, 'UserAbout');
});

$("#Tab_UserProjects").click(function() {
    switchTabContent(event, 'UserProjects');
});
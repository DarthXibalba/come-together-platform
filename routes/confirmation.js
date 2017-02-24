/* 
 * Server-side JS module 
 * Currently loads the projectData.json file and separately renders the Discover page.
 */

// Get all of our project data
console.log("Loading Confirmation.js");
var projectData = require('../projectData.json');

exports.viewConfirmation = function(req, res) {
	console.log("Confirmation page");
	res.render('confirmation');
}; 
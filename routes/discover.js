/* 
 * Server-side JS module 
 * Currently loads the projectData.json file and separately renders the Discover page.
 */

// Get all of our project data
console.log("Loading Discover.js");
var projectData = require('../projectData.json');

exports.view = function(req, res) {
	console.log("Discovering projects");
	res.render('discover', projectData);
};
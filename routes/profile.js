/* 
 * Server-side JS module 
 * Currently loads the projectData.json file and separately renders the Profile page.
 */

// Get all of our project data
console.log("Loading Profile.js");
var projectData = require('../projectData.json');
var newProjects = require('../newProjectsData.json');

exports.view = function(req, res) {
	console.log("Exporting Profile");
	res.render('profile',newProjects);
};
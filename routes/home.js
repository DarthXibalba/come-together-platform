/* 
 * Server-side JS module 
 * Currently loads the projectData.json file into the Home pages.
 */

// Get all of our project data
console.log("Loading Home.js");
var projectData = require('../projectData.json');

exports.viewA = function(req, res){
	console.log("Rendering Home A");
	projectData['versionA'] = true;
	res.render('home', projectData);
};

exports.viewB = function(req, res){
	console.log("Rendering Home B");
	projectData['versionA'] = false;
	res.render('home', projectData);
};
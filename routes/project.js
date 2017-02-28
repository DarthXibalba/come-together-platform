/* 
 * Server-side JS module 
 * Currently loads the projectData.json file and finds the correct project and
 *   renders its data in a new page.
 */

// Get all of our project data
console.log("Loading Project.js");
var projectData = require('../projectData.json');
var newProject = require('../newProjectsData.json');

exports.viewHighlights = function(req, res) {
	console.log("Rendering Highlights");
	/* This gets passed in through req from caller */
	var projID = req.params.id; 

	/* Find and return the correct object */
	var name = projectData['highlightProjects'][projID]['name'];
	var imageURL = projectData['highlightProjects'][projID]['imageURL'];
	var shortDesc = projectData['highlightProjects'][projID]['shortDescription'];
	var desc = projectData['highlightProjects'][projID]['description'];
	var status = projectData['highlightProjects'][projID]['status'];
	
	console.log("Status:", status);
	if (status === "active") {
		showJoin = true;
	}
	else {
		showJoin = false;
	}

	res.render('project', {
		'projectName': name,
		'projectImgUrl': imageURL,
		'projectShortDesc': shortDesc,
		'projectDesc': desc,
		'showJoinBtn': showJoin
	});
};

exports.viewTrending = function(req, res) {
	console.log("Rendering Trending");
	/* This gets passed in through req from caller */
	var projID = req.params.id; 

	/* Find and return the correct object */
	var name = projectData['trendingProjects'][projID]['name'];
	var imageURL = projectData['trendingProjects'][projID]['imageURL'];
	var shortDesc = projectData['trendingProjects'][projID]['shortDescription'];
	var desc = projectData['trendingProjects'][projID]['description'];
	var status = projectData['trendingProjects'][projID]['status'];
	
	console.log("Status:", status);
	if (status === "active") {
		showJoin = true;
	}
	else {
		showJoin = false;
	}


	res.render('project', {
		'projectName': name,
		'projectImgUrl': imageURL,
		'projectShortDesc': shortDesc,
		'projectDesc': desc,
		'showJoinBtn': showJoin
	});
};

exports.viewNewProject = function(req, res) {
	console.log("Rendering newProject");

	/* Find and return the correct object */
	var name = newProject['newProj'][0]['name'];
	var imageURL = newProject['newProj'][0]['imageURL'];
	var shortDesc = newProject['newProj'][0]['shortDescription'];
	var desc = newProject['newProj'][0]['description'];
	var status = projectData['trendingProjects'][projID]['status'];

	console.log("Read new project data!");
	console.log(name);
	console.log(imageURL);
	console.log(shortDesc);
	console.log(desc);

	console.log("Status:", status);
	if (status === "active") {
		showJoin = true;
	}
	else {
		showJoin = false;
	}

	res.render('project', {
		'projectName': name,
		'projectImgUrl': imageURL,
		'projectShortDesc': shortDesc,
		'projectDesc': desc,
		'showJoinBtn': showJoin
	});
};
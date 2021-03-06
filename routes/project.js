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
	var organizer = projectData['highlightProjects'][projID]['organizer'];
	var contact = projectData['highlightProjects'][projID]['contactInfo'];
	var progress = projectData['highlightProjects'][projID]['progressStatus'];
	var peopleNeeded = projectData['highlightProjects'][projID]['peopleNeeded'];
	var meetingTime = projectData['highlightProjects'][projID]['meetingTime'];
	var meetingLocation = projectData['highlightProjects'][projID]['meetingLocation'];
	
	console.log("Status:", status);
	if (status === "active") {
		showJoin = true;
	}
	else {
		showJoin = false;
	}
	// Add a valid variable so that the extra details are displayed for Highlights/Trending but not Create
	validProj = true;

	res.render('project', {
		'projectName': name,
		'projectImgUrl': imageURL,
		'projectShortDesc': shortDesc,
		'projectDesc': desc,
		'showJoinBtn': showJoin,
		'organizer': organizer,
		'contact': contact,
		'progress': progress,
		'peopleNeeded': peopleNeeded,
		'meetingTime': meetingTime,
		'meetingLocation': meetingLocation,
		'validProj': validProj
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
	var organizer = projectData['trendingProjects'][projID]['organizer'];
	var contact = projectData['trendingProjects'][projID]['contactInfo'];
	var progress = projectData['trendingProjects'][projID]['progressStatus'];
	var peopleNeeded = projectData['trendingProjects'][projID]['peopleNeeded'];
	var meetingTime = projectData['trendingProjects'][projID]['meetingTime'];
	var meetingLocation = projectData['trendingProjects'][projID]['meetingLocation'];
	
	console.log("Status:", status);
	if (status === "active") {
		showJoin = true;
	}
	else {
		showJoin = false;
	}
	// Add a valid variable so that the extra details are displayed for Highlights/Trending but not Create
	validProj = true;


	res.render('project', {
		'projectName': name,
		'projectImgUrl': imageURL,
		'projectShortDesc': shortDesc,
		'projectDesc': desc,
		'showJoinBtn': showJoin,
		'organizer': organizer,
		'contact': contact,
		'progress': progress,
		'peopleNeeded': peopleNeeded,
		'meetingTime': meetingTime,
		'meetingLocation': meetingLocation,
		'validProj': validProj
	});
};

exports.viewNewProject = function(req, res) {
	console.log("Rendering newProject");

	/* This gets passed in through req from caller */
	var projID = req.params.id; 

	/* Find and return the correct object */
	var name = newProject['newProjects'][projID]['name'];
	var imageURL = newProject['newProjects'][projID]['imageURL'];
	var shortDesc = newProject['newProjects'][projID]['shortDescription'];
	var desc = newProject['newProjects'][projID]['description'];
	var status = newProject['newProjects'][projID]['status'];

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
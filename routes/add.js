console.log("Loading Create.js");
var projectData = require('../newProjectsData.json');

exports.addProject = function(req, res) { 
    
  var newProject = {
      "id": 0,
      "name": req.query.name,
      "imageURL": req.query.imageurl,
      "shortDiscription": req.query.summary,
      "description": req.query.description,    
    };
  console.log(newProject);

  projectData.newProjects.push(newProject);

  res.render('project',projectData);

}
console.log("Loading Create.js");
var projectData = require('../newProjectsData.json');

exports.addProject = function(req, res) { 
    
  var newProject = {
      "id": (projectData.newProjects.length),
      "name": req.query.name,
      "imageURL": req.query.imageurl,
      "shortDescription": req.query.summary,
      "description": req.query.description,
      "status": "active",    
    };
  console.log(newProject);

  projectData['newProjects'].push(newProject);

  console.log(projectData);

  res.render('project', {
    'projectName': newProject['name'],
    'projectImgUrl': newProject['imageURL'],
    'projectShortDesc': newProject['shortDiscription'],
    'projectDesc': newProject['description']
  });

  //project.viewNewProject(newProject);

}
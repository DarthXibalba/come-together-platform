/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var home = require('./routes/home');
var project = require('./routes/project');
var discover = require('./routes/discover');
var create = require('./routes/create');
var profile = require('./routes/profile');
var settings = require('./routes/settings');
var staticpages = require('./routes/staticpages');
var confirmation = require('./routes/confirmation');
var addProject = require('./routes/add');



// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
	
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/home', home.view);
app.get('/project/highlights/:id', project.viewHighlights);
app.get('/project/trending/:id', project.viewTrending);
app.get('/project/new', project.viewNewProject);
app.get('/discover', discover.view);
app.get('/create', create.view);
app.get('/profile', profile.view);
app.get('/settings', settings.view);
app.get('/aboutus', staticpages.viewAboutUs);
app.get('/faq', staticpages.viewFAQ);
app.get('/contact', staticpages.viewContact);
app.get('/confirmation', confirmation.viewConfirmation);
app.get('/add', addProject.addProject);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

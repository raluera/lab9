/*
 * GET home page.
 */
 /*I could not figure out how to do this*/

var labs = require('../labs.json');

exports.view = function(req, res){
  if(labs.length < 11) {
  	var todaysLab = [{
		"id": "lab-9",
		"title": "Debugging 101",
		"date": "March 7",
		"image": "debug.png"
	}];

  	labs.push(todaysLab);
  }

  res.render('index', {
	'labs': labs
  });
};

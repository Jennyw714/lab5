var data = require("../data.json");

exports.addFriend = function(request, response) {  
	var name = request.query.name;
	var description = request.query.description;  
	var newFriend = res.render('index', {
		'name':name,
		'description':description,
		'imageURL':'http://lorempixel.com/400/400/people'
	});
	data.friends.push(newFriend);
	// Your code goes here
 }
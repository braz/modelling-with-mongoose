var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
	// Create a schema for a movie object with a title, numeric rating and a release year
	var movieSchema = new mongoose.Schema({
	  title: { type: String }
	, rating: Number
	, releaseYear: Number
	});

	// Associate a 'Movie' model using the movieSchema as the structure.
	// Mongoose will then create a MongoDB collection called 'Movies' for these documents. The capitalisation is important as this becomes the constructor function for creating new movie instances.
	var Movie = mongoose.model('Movie', movieSchema);

	var legoMovie = new Movie({title: "The LEGO Movie", rating: "10", releaseYear: "2014"});

	legoMovie.save(function(err, legoMovie) {
	    if (err) return console.error(err);
	}); // legoMovie.save
	
	Movie.findOne({ title: 'The LEGO Movie' }, {"_id": 0}, function(err, search_result) {
	if (err) return console.error(err);
	  console.dir(search_result);
	}); // Movie.findOne
}); // db.once

mongoose.connect('mongodb://127.0.0.1:27017/test');
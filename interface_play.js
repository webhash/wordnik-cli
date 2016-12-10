var exports = module.exports = {};
var core = require('./core');



exports.getRandomWordData =  function(response) {
	core.getRandomWord(function(response){
		if (response) {
			console.log("Random word is " + response.word);
			
		} else {
			console.log('Nothing found');
		}
	});
}
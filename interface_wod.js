var exports = module.exports = {};
var interface = require('./interface');
var core = require('./core');


exports.getWordofTheDay =  function(response) {
	core.getWordofDay(function(response) {
		if (response) {
			console.log("Word of day is " + response.word);
			interface.getDefinition(response.word);
			interface.getSynonyms(response.word);
			interface.getAntonyms(response.word);
			interface.getExamples(response.word);
		} else {
			console.log('Nothing found');
		}
	});
}
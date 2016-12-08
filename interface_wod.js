var exports = module.exports = {};
var interface = require('./interface');
var core = require('./core');


getAll = function(word) {
			interface.getDefinition(word);
			interface.getSynonyms(word);
			interface.getAntonyms(word);
			interface.getExamples(word);
}

exports.getWordofTheDay =  function(response) {
	core.getWordofDay(function(response) {
		if (response) {
			console.log("Word of day is " + response.word);
			getAll(response.word);
		} else {
			console.log('Nothing found');
		}
	});
}

exports.getRandomWordData =  function(response) {
	core.getRandomWord(function(response){
		if (response) {
			console.log("Random word is " + response.word);
			getAll(response.word);
		} else {
			console.log('Nothing found');
		}
	});
}
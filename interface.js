var exports = module.exports = {};
var core = require('./core');


exports.getSynonyms =  function(word, callback) {
	core.getWordRelation(word,'synonym', function(err, response){
		if (err) {
			console.log(' Synonyms :  Error occured');
			return;
		}
		if (response && response[0]) {
			var list = response[0].words
			for(i in list){
				console.log(' Synonym : '  + list[i]);
			}
		} else {
			console.log(' Synonyms : Nothing found');
		}
	});
}

exports.getAntonyms =  function(word) {
	core.getWordRelation(word,'antonym', function(err, response){
		if (err) {
			console.log(' Antonyms :  Error occured');
			return;
		}
		if (response && response[0]) {
			var list = response[0].words
			for(i in list){
				console.log(' Antonym : ' + list[i]);
			}
		} else {
			console.log('Antonyms : Nothing found');	
		}
	});
}

exports.getDefinition = function (word) {
	core.getWordDef(word, function(err, response) {
		if (err) {
			console.log(' Meaning :  Error occured');
			return;
		}
		if (response) {
			for (i in response){
				console.log(' Meaning : ' + response[i].text);
			}
		} else {
			console.log('Meaning : Nothing found');
		}

	});
}

exports.getExamples = function(word) {
	core.getWordExample(word, function(err, response) {
		if (err) {
			console.log(' Examples :  Error occured');
			return;
		}
		if (response) {
			var list = response.examples
			for (i in list) {
				console.log(' Examples : ' + list[i].text);
			}
		} else {
			console.log(' Examples :  Nothing found');
		}
	});
}


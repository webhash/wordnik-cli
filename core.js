
var exports = module.exports = {};
var url = 'http://api.wordnik.com'
var api_key = "a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
var port = 80;
var version = 4;


function getData(URL, callback) {
	var request = require('request');
	request(URL, (error, response, body) =>{
		if (!error && response.statusCode === 200) {
    		var wordnikResponse = JSON.parse(body)
    		return callback(wordnikResponse);
  		} else {
    		console.log("Got an error: ", error, ", status code: ", response.statusCode, " for the request", request)
  		}
	})
}

exports.getWordDef = function (word, callback) {
	var limit=10;
	var includeRelated = false;
	var wordDefURL = url + ':' + port + '/v' + version + '/word.json/' + word + '/definitions?limit=' + limit + '&includeRelated=' + includeRelated + '&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=' + api_key
	getData(wordDefURL, function(response){return callback(response);});

}

exports.getWordRelation = function (word, relationshipType, callback) {

	var limitPerRelationshipType = 10;
	var wordRelationURL = url + ':' + port + '/v' + version + '/word.json/' + word + '/relatedWords?useCanonical=false&relationshipTypes=' + relationshipType + '&limitPerRelationshipType=' + limitPerRelationshipType + '&api_key=' + api_key
	getData(wordRelationURL, function(response){return callback(response);});
}
	
exports.getWordExample = function (word, callback) {
	var limit = 5;
	var wordExampleURL = url + ':' + port + '/v' + version + '/word.json/' + word + '/examples?includeDuplicates=false&useCanonical=false&skip=0&limit=' + limit + '&api_key=' + api_key
	getData(wordExampleURL, function(response){return callback(response);});
}

exports.getWordofDay = function (callback) {
	var currentdate = new Date().toISOString().split(/T/)[0];
	var wordOfTheDayURL =  url + ':' + port + '/v' + version + '/words.json/wordOfTheDay?date=' + currentdate + '&api_key=' + api_key
	getData(wordOfTheDayURL, function(response){return callback(response);});
}


exports.getRandomWord = function(callback) {
	var wordRandomURL =  url + ':' + port + '/v' + version + '/words.json/randomWord?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=' + api_key
	getData(wordRandomURL, function(response){return callback(response);});
}
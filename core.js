
var exports = module.exports = {};
var url = 'http://api.wordnik.com'
var api_key = "a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
var port = 80;
var version = 4;
var relationshipTypes = ['synonym', 'antonym'];


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

exports.getWordDef = function (word) {
	var limit=10;
	var includeRelated = false;
	var wordDefURL = url + ':' + port + '/v' + version + '/word.json/' + word + '/definitions?limit=' + limit + '&includeRelated=' + includeRelated + '&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=' + api_key
	getData(wordDefURL, function(response){console.log(response);});

}

exports.getWordRelation = function (word, relationshipType) {

	var limitPerRelationshipType = 10;
	var wordRelationURL = url + ':' + port + '/v' + version + '/word.json/' + word + '/relatedWords?useCanonical=false&relationshipTypes=' + relationshipType + '&limitPerRelationshipType=' + limitPerRelationshipType + '&api_key=' + api_key
	getData(wordRelationURL, function(response){console.log(response);});
}
	
exports.getWordExample = function (word) {
	var limit = 5;
	var wordExampleURL = url + ':' + port + '/v' + version + '/word.json/' + word + '/examples?includeDuplicates=false&useCanonical=false&skip=0&limit=' + limit + '&api_key=' + api_key
	getData(wordExampleURL, function(response){console.log(response);});
}

exports.getWordofDay = function () {
	var currentdate = new Date().toISOString().split(/T/)[0];
	var wordOfTheDayURL =  url + ':' + port + '/v' + version + '/words.json/wordOfTheDay?date=' + currentdate + '&api_key=' + api_key
	var data = getData(wordOfTheDayURL);
	getData(wordOfTheDayURL, function(response){console.log(response);});
}
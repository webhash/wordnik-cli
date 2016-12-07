const request = require('request');

var url = 'http://api.wordnik.com'
var api_key = "a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
var port = 80;
var version = 4;

var relationshipTypes = 'synonym';

var word = "test";
var caseSensitive = true;
var minCorpusCount = 5;
var maxCorpusCount = -1;
var minDictionaryCount = 1;
var minLength = 1;
var maxLength = -1;
var skip = 0;
var wordSearchURL = url + ':' + port + '/v' + version + '/words.json/search/' + word +  '?caseSensitive=' + caseSensitive + '&minCorpusCount=' + minCorpusCount + 
	'&maxCorpusCount=' +  maxCorpusCount + '&minDictionaryCount=' + minDictionaryCount + '&minLength=' + minLength + "&maxLength=" + maxLength + '&skip=' +  skip + '&limit=' + limit + '&&api_key=' + api_key



var limit=10;
var includeRelated = false;
var wordDefURL = url + ':' + port + '/v' + version + '/word.json/' + word + '/definitions?limit=' + limit + '&includeRelated=' + includeRelated + '&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=' + api_key
	
var limitPerRelationshipType = 10;
var relationshipType = 'synonym';
var wordRelationURL = url + ':' + port + '/v' + version + '/word.json/' + word + '/relatedWords?useCanonical=false&relationshipTypes=' + relationshipType + '&limitPerRelationshipType=' + limitPerRelationshipType + '&api_key=' + api_key


var wordExampleURL = url + ':' + port + '/v' + version + '/word.json/' + word + '/examples?includeDuplicates=false&useCanonical=false&skip=0&limit=' + limit + '&api_key=' + api_key

var currentdate = new Date().toISOString().split(/T/)[0];
var wordOfTheDayURL =  url + ':' + port + '/v' + version + '/words.json/wordOfTheDay?date=' + currentdate + '&api_key=' + api_key


var URL = wordOfTheDayURL;
request(URL, (error, response, body)=> {
	console.log(URL);
	if (!error && response.statusCode === 200) {
    	const wordnikResponse = JSON.parse(body)
    	console.log("Got a response: ", wordnikResponse)
  	} else {
    	console.log("Got an error: ", error, ", status code: ", response.statusCode)
  	}
})

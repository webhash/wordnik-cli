
var program = require('commander');
var interface = require('./interface');
var interface_wod = require('./interface_wod');


getAll = function(word) {

	interface.getDefinition(word);
	interface.getSynonyms(word);
	interface.getAntonyms(word);
	interface.getExamples(word);
}

program
	.usage('[Options]')
	.option('', 'Display definitions, synonyms, \n\t\t\t\t antonyms & examples of word of the day\n')
	.option('def <word>', 'Display definitions of a word.\n')
	.option('syn <word>', 'Display synonyms of a word.\n')
	.option('ant <word>', 'Display antonyms of a word.\n')
	.option('ex <word>', 'Display examples of a word.\n')
	.option('dict <word> or <word>', 'Display definitions, synonyms, \n\t\t\t\t antonyms & examples of word\n')
	.option('play', 'Display a definition, synonym, or antonym; \n\t\t\t\t user enters the answer and game begins\n')
	.parse(process.argv);

// convert words to lower case before sending them to core

if(program.rawArgs.length==2) {
	// word of the day
	interface_wod.getWordofTheDay();

} else if(program.play) {
	console.log("play");
	console.log(program.play);	

} else if (program.rawArgs.length ==3) {
	var word = 	program.args[0].toLowerCase();
	console.log(word);
	getAll(word);

} else if(program.def){
	var word = 	program.def.toLowerCase();
	console.log(word)
	interface.getDefinition(word);

} else if(program.syn) {
	var word = 	program.syn.toLowerCase();
	console.log(word)
	interface.getSynonyms(word);

} else if(program.dict){
	var word = 	program.dict.toLowerCase();
	console.log(word)
	getAll(word);	

} else if(program.ant){
	var word = 	program.ant.toLowerCase();
	console.log(word)
	interface.getAntonyms(word);
	

} else if(program.ex){
	var word = 	program.ex.toLowerCase();
	console.log(word)
	interface.getExamples(word);

} else {
	console.log("please enter a valid option, check help. --help or -h ");

}

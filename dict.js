
var program = require('commander');

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
	console.log("no op");	
} else if (program.rawArgs.length ==3) {
	console.log("word");	
	console.log(program.args);
} else if(program.def){
	console.log("def");	
	console.log(program.def);
} else if(program.syn) {
	console.log("syn");	
	console.log(program.syn);
} else if(program.play){
	console.log("play");
	console.log(program.play);	
} else if(program.dict){
	console.log("dict");
	console.log(program.dict);	
} else if(program.ant){
	console.log("ant");
	console.log(program.ant);	
} else if(program.ex){
	console.log("ex");
	console.log(program.ex);	
} else {
	console.log("please enter a valid option, check help. --help or -h ");
}

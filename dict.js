
var program = require('commander');

program
	.usage('[Options]')
	.option('\n<no option passed>', 'Display definitions, synonyms, \n\t\t\t\t antonyms & examples of word of the day\n')
	.option('def <word>', 'Display definitions of a word.\n')
	.option('syn <word>', 'Display synonyms of a word.\n')
	.option('ant <word>', 'Display antonyms of a word.\n')
	.option('ex <word>', 'Display examples of a word.\n')
	.option('dict <word> or <word>', 'Display definitions, synonyms, \n\t\t\t\t antonyms & examples of word\n')
	.option('play', 'Display a definition, synonym, or antonym; \n\t\t\t\t user enters the answer and game begins\n');

program.parse(process.argv);
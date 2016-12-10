var exports = module.exports = {};
var core = require('./core');
var async = require('async')
var readlineSync = require('readline-sync');





exports.PlayGame = function() {
	var answer = ''
	core.getRandomWord(function(err, response){
		answer = response.word;
		async.series([
			function(callback) {
				core.getWordDef(response.word,function(err, res) { 
					if (err) {
						callback(err, null);
						return;
					}
					var ret = []
					for (i in res){
						ret.push(res[i].text);
					}
					callback(null, ret);
				});
			},
			function(callback) {
				core.getWordRelation(response.word,'synonym',function(err, res) { 
					if (err) {
						callback(err, null);
						return;
					}
					if (res[0]) {
						var ret = []
						var list = res[0].words
						for(i in list){
							ret.push(list[i]);
						}
					}
					callback(null, ret);
				});
			},
			function(callback) {
				core.getWordRelation(response.word,'antonym',function(err, res) { 
					if (err) {
						callback(err, null);
						return;
					}
					if (res[0]) {
						var ret = []
						var list = res[0].words
						for(i in list){
							ret.push(list[i]);
						}
					}
					callback(null, ret);
				});
			},	
		], function(err, result){
			if (err) {
				console.log('ERROR!!!');
				return;
			}

			var antonym = result[2];
			var synonym = result[1];
			var defination = result[0];
			var isOK = false;
			var userGuess = false;
			var hint = [];

			var shuffle = answer.split('').sort(function(){return 0.5-Math.random()}).join('');

			hint.push(shuffle);

			if (typeof antonym!= 'undefined' && antonym.length > 0) {

				for (i in antonym)
				{
					hint.push(antonym[i]);
				}

			}

			if (typeof synonym!= 'undefined' && synonym.length > 0) {

				for (i in synonym)
				{
					hint.push(synonym[i]);
				}
			}
			
			if (typeof defination!= 'undefined' && defination.length > 0) {

				for (i in defination)
				{
					hint.push(defination[i]);
				}

			}




			var isHint = true;
			console.log(answer);
			console.log("lets play the game; we will provide the hints, you guess the words\n");

			do {
				if (typeof hint!= 'undefined' && hint.length > 0) {

					if (isHint){
						console.log(hint.pop());	
					}
					
					userGuess = readlineSync.question('\nGuess the word\n');

					if (userGuess.toLowerCase() == answer)
					{
						console.log('\nCongratulations you got it!!!\n');
						return;

					} else {
						userGuess = readlineSync.question('\nSorry, guess is wrong\n enter "Try Again" or "Hint" or "quit"\n');
						switch (userGuess.toLowerCase()) {
							case 'try again':
								userGuess = readlineSync.question('\nGuess the word\n');
								if (userGuess.toLowerCase() == answer)
								{
									console.log('\nCongratulations you got it!!!\n');
									return;
								} else {
									isHint = false;
								}
								break;
							case 'hint':
								isHint =  true;
								break;
							case 'quit':
								return;
							default:
								console.log("\nnot a valid option, we will give you a hint again\n");
						}
					}
				} else {
					console.log("\nWe ran out of hints\n");
					isOK = true;
				}



			 
			} while(!isOK)



		});
	});
};

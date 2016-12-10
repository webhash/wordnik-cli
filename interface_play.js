var exports = module.exports = {};
var core = require('./core');
var async = require('async')
var request = require('request')





exports.getRandomWordData = function() {
	core.getRandomWord(function(err, response){
		console.log(response.word);
		async.series([
			function(callback) {
				core.getWordExample(response.word,function(err, res) { 
					if (err) {
						callback(err, null);
						return;
					}
					var list = res.examples
					var ret = []
					for (i in list) {
						ret.push(list[i].text);
					}
					callback(null, ret);
				});
			},	
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
			console.log(result);
		});
	});
};

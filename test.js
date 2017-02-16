var forismatic = require('forismatic-node')();

forismatic.getQuote({
	lang: 'en',
}, 
	function(err, quote){
		if(!err){
			console.log(quote);
		}
		else{
			console.log(err);
		}
});
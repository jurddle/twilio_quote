const http = require('http');
const express = require('express');
const twilio = require('twilio');
const bodyParser = require('body-parser');

const accSID = 'YOUR_ACCOUNT_SID';
const authToken = 'YOUR_AUTHORIZATION_TOKEN';
const client = require('twilio')(accSID, authToken);

const forismatic = require('forismatic-node')();
const app = express();

app.use(bodyParser());

// First initial message sent to user
client.messages.create({
	to: "+19172504296",
	from: "+19179245870",
	body: "Hello! Enter 'Q' for a random quote.",
}, function(err, message){
	if(err){
		console.log('Error sending message!');
	}
	else{
		console.log('Success! Message sent on: ' + message.dateCreated);
	}
});

/*const getQuote = forismatic.getQuote(function(err, quote){
	if(!err){
		console.log(quote);
	}
	else{
		console.log(err);
	}
});*/

var forismatic_quote;

forismatic.getQuote(function(err, quote){
	if(!err){
		//console.log(quote);
		forismatic_quote = quote;
	}
	else{
		console.log(err);
	}
});

// Sends user a random quote from forismatic-node
app.post('/', (req, res) => {
	const twiml = new twilio.TwimlResponse();

	if(req.body.Body == 'Q'){
		twiml.message(forismatic_quote);
	}
	else{
		twiml.message("Please enter 'Q' for a quote");
		console.log("Incorrect input!")
	}
	res.writeHead(200, {'Content-Type': 'text/xml'});
	res.end(twiml.toString());
});

app.listen(3000, () => { 
	console.log("Express server listening on port 3000");
});


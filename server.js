const http = require('http');
const express = require('express');
const twilio = require('twilio');

const app = express();

app.post('/sms', (req, res) => {
	const twiml = new twilio.TwimlResponse();
	twiml.message("Here's a quote!");
	
	res.writeHead(200, {'Content-Type': 'text/xml'});
	res.end(twiml.toString());
});

http.createServer(app).listen(3000, () => {
	console.log("Express server listening on port 3000");
});
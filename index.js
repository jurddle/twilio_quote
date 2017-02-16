const accSID = 'ACf0f03fe156f73f540d3fa9a9cda3c57e';
const authToken = 'ee2345577a3aaed285b0757950042f25';

const client = require('twilio')(accSID, authToken);

client.messages
	.create({
		to: "+19172504296",
		from: "+19179245870",
		body: "Enter 'Q' for a quote:",
	}, function(err, message){
		if(err){
			console.log('Error sending message!');
		}
		else{
			console.log('Success! Message sent on:');
			console.log(message.dateCreated);
		}
	});


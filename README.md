# twilio_quote

Twilio application using Nodejs and forismatic-node to send random quotes to user.

## Installation:
Install twilio-node following [this](https://www.twilio.com/docs/libraries/node#installation).

`npm install` inside the main folder once cloned to install dependencies.

Use [ngrok](https://ngrok.com/) as the server.
Follow [this](https://www.twilio.com/docs/guides/sms/how-to-receive-and-reply-in-node-js#backup-webhook-url) to set up Twilio Webhook with ngrok.

Access your Twilio Account SID and Authentication Token and use for `accSID` and `authToken`.

### To Run:
Inside main folder, run `node server.js`
Make sure the ngrok server is running.


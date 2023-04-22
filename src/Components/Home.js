import React from "react";
import "../Styles/main.css";

function Home() {
	const accountSid = 'AC2cc8ecae2afcfffe072a693033d6f7e1';
	const authToken = 'd202b428e7376f1633c57196a14fd6c2';
	
	const client = require('twilio')(accountSid, authToken);
	
	client.messages
	  .create({
		body: 'Hello from watersaver',
		to: '+27663071027', // Text your number
		from: '+16074008915', // From a valid Twilio number
	  })
	  .then((message) => console.log(message.sid));

	return <div>This is the Home page!</div>;
}

export default Home;

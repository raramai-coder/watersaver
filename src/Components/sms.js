let numbersToMessage=["+27663071027"]; //get numbers from database

const accountSid = "AC2cc8ecae2afcfffe072a693033d6f7e1";
const authToken = "d202b428e7376f1633c57196a14fd6c2";
const client = require("twilio")(accountSid, authToken);

numbersToMessage.forEach(function(number){
  let message = client.messages.create({
    body: 'hello from watersaver',
    from: '+16074008915',
    to: number
  })
  .then(message =>  console.log(message.status))
  .done();
});

// //
// fetch('/your-server-side-endpoint', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     userResponse: 'response with water level'
//   })
// })
// .then(response => response.json())
// .then(data => {
//   // Handle the response data here
// })
// .catch(error => {
//   // Handle errors here
// });


//response
// client.messages
//   .create({
//     body: 'Hello from Twilio USSD',
//     to: 'USSD_PHONE_NUMBER',
//     from: '16074008915',
//     statusCallback: 'watersaverserver.database.windows.net'
//   })
//   .then(message => console.log(message.sid))
//   .catch(error => console.log(error));


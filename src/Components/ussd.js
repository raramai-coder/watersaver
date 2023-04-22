const { getServers } = require('dns');
const UssdMenu = require('ussd-builder');
let menu = new UssdMenu();

// const express = require('express');
// const app = express();

// Define menu states
menu.startState({
    run: () => {
        // use menu.con() to send response without terminating session      
        menu.con('Welcome. Choose option:' +
            '\n1. Report low water level' +
            '\n2. Report low water quality'+
            '\n3. Register');
    },
    // next object links to next state based on user input
    next: {
        '1': 'lowWater',
        '2': 'lowQuality',
        '3': 'Register'
    }
});

menu.state('lowWater', {
    run: () => {
        menu.con('Enter location of water source:');
        let waterLevel = false;
        let phone = menu.args.phoneNumber;
    },
    next: {
        // using regex to match user input to next state
        '*\\d+': 'lowWater2'
    }
});

menu.state('lowWater2', {
    run: () => {
        menu.con('Select urgency:' +
        '\n1. High' +
        '\n2. Medium'+
        '\n3. Low');
    },
    next: {
        // using regex to match user input to next state
        '*\\d+': 'lowWater3'
    }
});

menu.state('lowWater3', {
    run: () => {
        menu.con('Describe problem:');
    },
    next: {
        // using regex to match user input to next state
        '*\\d+': 'lowWater4'
    }
});


menu.state('lowWater4', {
    run: () => {
        menu.con('Enter location:');
    },
    next: {
        // using regex to match user input to next state
        '*\\d+': 'lowWater5'
    }
});

menu.state('lowWater5', {
    run: () => {
        menu.con('Enter name:');
    },
    next: {
        // using regex to match user input to next state
        '*\\d+': menu.end('Thank you for submitting your water concerns')
    }
});


menu.state('lowQuality', {
    run: () => {
        menu.con('Enter location of water source:');
        let waterQuality = false;
        let phone = menu.args.phoneNumber;
    },
    next: {
        // using regex to match user input to next state
        '*\\d+': 'lowWater2'
    }
});

menu.state('Register', {
    run: () => {
        // let session = getSession(menu.args.sessionId);
        let phone = menu.args.phoneNumber;
        menu.con("Enter name:")
    },
    next: {
        // using regex to match user input to next state
        '*\\d+': 'Register2'
    }
});

menu.state('Register2', {
    run: () => {
        // let session = getSession(menu.args.sessionId);
        let phone = menu.args.phoneNumber;
        menu.con("Enter location:")
    },
    next: {
        // using regex to match user input to next state
        '*\\d+': 'Register3'
    }
});

menu.state('Register2', {
    run: () => {
        // let session = getSession(menu.args.sessionId);
        let phone = menu.args.phoneNumber;
        menu.con("Enter preferred language:")
    },
    next: {
        // using regex to match user input to next state
        '*\\d+': menu.end('Thank you for registering!')
    }
});

// Registering USSD handler with Express

app.post('/ussd', (req, res)=>{
    menu.run(req.body, ussdResult => {
        res.send(ussdResult);
    });
});

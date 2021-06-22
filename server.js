'use strict';

// 3rd Party Resources
const express = require('express');

// Prepare the express app
const app = express();

// Process JSON input and put the data on req.body
app.use(express.json());


// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));


const userSignUp = require('./auth/signup.js');
app.use(userSignUp);

const userSignIn = require('./auth/signin.js');
app.use(userSignIn);


module.exports = {
  app: app,
  start: (PORT) => {
    app.listen(PORT, () => console.log('server up'));
  },
};


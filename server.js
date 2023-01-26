const express = require("express");

const app = express();

app.use(express.static(`${__dirname}/public`))

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '48e3921052b44b398ad1fadadae5ae98',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.listen(4000, () => {
  console.log("server running on port 4000");
});

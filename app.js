// Require the express library:
var express = require('express');

// Create an app:
var app = express();

// This shows you how to use "middleware" to provide additional
// functionality. This middleware allows files to be served
// statically:
app.use(express.static(__dirname + '/public'));

// Adding Users:
app.post('/users/add', function (req, res) {
  
});

// Start the server:
var server = app.listen(3000, function () {
  console.log('Listening on port %d', server.address().port);
});

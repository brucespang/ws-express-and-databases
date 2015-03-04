// Require the express library:
var express = require('express');

// Require our database library:
var db = require('db');

// Create an app:
var app = express();

// A route to list all users and provide a form to add more.
app.get('/users', function (req, res) {
  res.send('<p>Not implemented yet.</p>');
});

app.get('/users/add', function (req, res) {
  res.send('<p>Not implemented yet.</p>');
});

// Start the server:
var server = app.listen(3000, function () {
  console.log('Listening on port %d', server.address().port);
});

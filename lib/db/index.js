var pg = require('pg');

var cstr = 'postgres://student:student@localhost/users';

/**
 * This function adds a user to the database.
 */
function add(user, cb) {
  
}

/**
 * This function removes a user from the database.
 */
function remove(user, cb) {
  
}

/**
 * This function returns a list of all users in the database.
 */
function list(user, cb) {
  pg.connect(cstr, function(err, client, done) {
    if (err) {
      cb(err);
    } else {
      client.query('select * from users', function(err, result) {
	// Ends the "transaction":
	done();
	// Disconnects from the database:
	client.end();
	if (err) {
	  cb(err);
	} else {
	  cb(undefined, result.rows);
	}
      });
    }
  });
}

module.exports = {
  add     : add,
  remove  : remove,
  list    : list
};

var pg = require('pg');

var cstr = 'postgres://student:student@localhost/users';

/**
 * This function adds a user to the database.
 */
function add(user, cb) {
  cb('Not implemented yet');
}

/**
 * This function returns a list of all users in the database.
 */
function list(cb) {
  cb('Not implemented yet');
}

module.exports = {
  add     : add,
  list    : list
};

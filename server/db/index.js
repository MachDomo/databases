var mysql = require('mysql');
var credentials = require('../spec/credentials.js');
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var dbConnection = mysql.createConnection(credentials);

module.exports = dbConnection;

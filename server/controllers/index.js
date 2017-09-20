'use strict';
var models = require('../models');
var db = require('../db/index.js');


module.exports = {
  messages: {
    get: function (req, res) {
      // get all the messages
      db.query('select * from messages', function(err, rows, fields) {
        if (err) {
          res.end(`There was an error: ${err.message}`);
        } else {
          res.end(JSON.stringify({results: rows}));
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('req body', (req.body));
      let headers = Object.keys(req.body).map(prop => prop.toUpperCase()).join(',');
      let values = [];
      for (let key in req.body) {
        values.push(`"${req.body[key]}"`);
      }
      values = values.toString();
      console.log('values', values);


      db.query(`INSERT INTO messages (${headers}) VALUES (${values})`, function(err, rows, fields) {
        if (err) {
          console.error(err.message);
          res.end(`There was an error: ${err.message}`);
        } else {
          console.log('Message Submitted');
          res.end('message submitted');
        }
      });



    } // a function which handles posting a message to the database
  },


  //todo: check out INSERT INTO myTable (col1, createdDate, updatedDate) VALUES (1, DEFAULT, DEFAULT)


  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {

      db.query(`INSERT INTO users (USERNAME) VALUES ('${req.body.username}')`, function (err, rows, fields) { // ${req.body.username}
        console.log(req.body.username);
        if (err) {
          res.end(`There was an error: ${err.message}`);
        } else {
          console.log('User submitted');
          res.end('new user added');
        }
      });
    }
  }
};



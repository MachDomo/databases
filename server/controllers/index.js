var models = require('../models');
var db = require('../db/index.js');


module.exports = {
  messages: {
    get: function (req, res) {

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('req body', (req.body));
      console.log(Object.keys(req.body).map(prop => prop.toUpperCase()).join(','));
      db.connect(function(err) {
        if (err) {
          console.error(err);
        } else {
          // let headers = req.body.keys().

          // // ('${message.text}'), '${message.username}', '${message.roomname}'`;
          // // var queryString = `INSERT INTO messages (TEXT, USERNAME, ROOMNAME) VALUES (${values})
          // let message = req.body;
          //db.query(queryString)
          db.query(`INSERT INTO messages (TEXT, USERNAME, ROOMNAME) VALUES ('Sample text', 'Jonathan', 'My Room')`, function(err, rows, fields) {
            db.query(`INSERT INTO messages (TEXT, USERNAME, ROOMNAME) VALUES ('SECOND ONE!', 'Jonathan', 'My Room')`);

            db.end();
          });

          res.end('message submitted');
        }
      });
    } // a function which handles posting a message to the database
  },


  //todo: check out INSERT INTO myTable (col1, createdDate, updatedDate) VALUES (1, DEFAULT, DEFAULT)


  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};


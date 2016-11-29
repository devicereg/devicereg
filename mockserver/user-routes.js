var express = require('express'),
    _       = require('lodash'),
    config  = require('./config'),
    jwt     = require('jsonwebtoken'),
    sqlite3 = require('sqlite3').verbose();

var app = module.exports = express.Router();

// XXX: This should be a database of users :).
var users = [{
  id: 1,
  username: 'gonto',
  password: 'gonto'
}];

function createToken(user) {
  return jwt.sign(_.omit(user, 'password'), config.secret, { expiresIn: 60*60*5 });
}

function getUserScheme(req) {
  
  var username;
  var type;
  var userSearch = {};

  // The POST contains a username and not an email
  if(req.body.username) {
    username = req.body.username;
    type = 'username';
    userSearch = { username: username };
  }
  // The POST contains an email and not an username
  else if(req.body.email) {
    username = req.body.email;
    type = 'email';
    userSearch = { email: username };
  }

  return {
    username: username,
    type: type,
    userSearch: userSearch
  }
}

app.post('/users', function(req, res)
{
  
  var userScheme = getUserScheme(req);

  /**
   * SQLite database
   */
  var db = new sqlite3.Database('database/devicer.sqlite');

  db.serialize(function()
  {
    db.run(
      "INSERT INTO user " +
        "('id', 'lastname', 'name', 'email', 'street', 'housenumber', 'zip', 'city', 'password') " +
      "VALUES " +
        "($id, $lastname, $name, $email, $street, $housenumber, $zip, $city, $password)",
        {
          $id: null,
          $lastname: req.body.lastname,
          $name: req.body.name,
          $email: req.body.email,
          $street: req.body.street,
          $housenumber: req.body.housenumber,
          $zip: req.body.zip,
          $city: req.body.city,
          $password: req.body.password
        }
    );


    db.get("SELECT * FROM user WHERE email = ?", [ req.body.email ],
      function(err, row)
      {
        jwt_token = createToken(row);
        console.log("User object: " + row);
        console.log("JWT Token: " + jwt_token);

        res.status(201).send({ id_token: jwt_token });
      }
    );
  });
});

app.post('/user/update', function(req, res)
{
  /**
   * SQLite database
   */
  var db = new sqlite3.Database('database/devicer.sqlite');

  db.serialize(function()
  {
    db.run(
      "UPDATE user " +
        "SET lastname=?, name=?, email=?, street=?, housenumber=?, zip=?, city=? " +
      "WHERE id=?",
        [
          req.body.lastname,
          req.body.name,
          req.body.email,
          req.body.street,
          req.body.housenumber,
          req.body.zip,
          req.body.city,
          req.body.id
        ]
    );


    db.get("SELECT * FROM user WHERE email = ?", [ req.body.email ],
      function(err, row)
      {
        jwt_token = createToken(row);
        console.log("User object: " + row);
        console.log("JWT Token: " + jwt_token);

        res.status(201).send({ id_token: jwt_token });
      }
    );
  });
});

app.post('/user/delete', function(req, res)
{
  /**
   * SQLite database
   */
  var db = new sqlite3.Database('database/devicer.sqlite');

  db.serialize(function()
  {
    db.run("DELETE FROM user WHERE id=?", req.body.id,
      function(err)
      {
        res.status(201).send({ message: "Profil wurde erfolgreich gelöscht." });
      });
  });
});

app.post('/sessions/create', function(req, res)
{
  /**
   * SQLite database
   */
  var db = new sqlite3.Database('database/devicer.sqlite');

  db.serialize(function()
  {
    db.get("SELECT * FROM user WHERE email = ?", [ req.body.email ],
      function(err, row)
      {
        jwt_token = createToken(row);
        console.log("User object: " + row);
        console.log("JWT Token: " + jwt_token);

        res.status(201).send({ id_token: jwt_token });
      }
    );
  });
});

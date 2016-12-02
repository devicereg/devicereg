var express = require('express'),
    _       = require('lodash'),
    config  = require('./config'),
    jwt     = require('jsonwebtoken'),
    sqlite3 = require('sqlite3').verbose();

var app = module.exports = express.Router();
<<<<<<< HEAD

// XXX: This should be a database of users :).
var users = [{
  id: 1,
  username: 'gonto',
  password: 'gonto'
}];
=======
>>>>>>> ed53e093b38be6f98badde205f6d9fe53da5e699

function createToken(user) {
  return jwt.sign(_.omit(user, 'password'), config.secret, { expiresIn: 60*60*5 });
}

<<<<<<< HEAD
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

app.post('/users', function(req, res) {
  
  var userScheme = getUserScheme(req);  

  if (!userScheme.username || !req.body.password) {
    return res.status(400).send("You must send the username and the password");
  }

  if (_.find(users, userScheme.userSearch)) {
   return res.status(400).send("A user with that username already exists");
  }

  var profile = _.pick(req.body, userScheme.type, 'password', 'extra');
  profile.id = _.max(users, 'id').id + 1;

  users.push(profile);
=======
app.post('/users', function(req, res)
{
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
          $lastname: req.body.surname,
          $name: req.body.prename,
          $email: req.body.email,
          $street: req.body.street,
          $housenumber: req.body.number,
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
>>>>>>> ed53e093b38be6f98badde205f6d9fe53da5e699

        res.status(201).send({ id_token: jwt_token });
      }
    );
  });
});

app.post('/user/update', function(req, res)
{
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

<<<<<<< HEAD
  var userScheme = getUserScheme(req);

  if (!userScheme.username || !req.body.password) {
    return res.status(400).send("You must send the username and the password");
  }

  var user = _.find(users, userScheme.userSearch);
  
  if (!user) {
    return res.status(401).send("The username or password don't match");
  }
=======

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
  var db = new sqlite3.Database('database/devicer.sqlite');
>>>>>>> ed53e093b38be6f98badde205f6d9fe53da5e699

  db.serialize(function()
  {
    db.get("SELECT * FROM user WHERE email = ? AND password = ?", [ req.body.email, req.body.password ],
      function(err, row)
      {
        if(typeof row != 'undefined')
        {
          jwt_token = createToken(row);
          console.log("User object: " + row);
          console.log("JWT Token: " + jwt_token);

          res.status(201).send({ id_token: jwt_token });
        }
        else
        {
          res.status(401).send(
          { 
            message: "Der Benutzer mit der E-Mail Adresse '" + req.body.email + "' konnte nicht gefunden werden." 
          });
        }
      }
    );
  });
});

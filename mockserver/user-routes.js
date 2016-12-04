var express = require('express'),
    _       = require('lodash'),
    config  = require('./config'),
    jwt     = require('jsonwebtoken'),
    sqlite3 = require('sqlite3').verbose();

var app = module.exports = express.Router();

function createToken(user) {
  return jwt.sign(_.omit(user, 'password'), config.secret, { expiresIn: 60*60*5 });
}

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

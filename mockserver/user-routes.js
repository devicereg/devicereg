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
app.post('/users', function(req, res)
app.post('/user/create', function(req, res)
{
  var db = new sqlite3.Database('database/devicer.sqlite');

  db.serialize(function()
  {
    db.run(
      "INSERT INTO user " +
        "('id', 'gender', 'surname', 'prename', 'language', 'phone', 'industry_family', 'industry_type', 'company', 'street', 'number', 'zip', 'city', 'country', 'password', 'question', 'answer', 'email') " +
      "VALUES " +
        "($id, $gender, $surname, $prename, $language, $phone, $industry_family, $industry_type, $company, $street, $number, $zip, $city, $country, $password, $question, $answer, $email)",
        {
          $id: null,
          $gender: req.body.gender,
          $surname: req.body.surname,
          $prename: req.body.prename,
          $language: req.body.language,
          $phone: req.body.phone,
          $industry_family: req.body.industry_family,
          $industry_type: req.body.industry_type,
          $company: req.body.company,
          $street: req.body.street,
          $number: req.body.number,
          $zip: req.body.zip,
          $city: req.body.city,
          $country: req.body.country,
          $password: req.body.password,
          $question: req.body.question,
          $answer: req.body.answer,
          $email: req.body.email
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
        "SET gender=?, surname=?, prename=?, language=?, phone=?, industry_family=?, industry_type=?, company=?, street=?, number=?, zip=?, city=?, country=?, password=?, question=?, answer=?, email=? " +
      "WHERE id=?",
        [
            req.body.gender,
            req.body.surname,
            req.body.prename,
            req.body.language,
            req.body.phone,
            req.body.industry_family,
            req.body.industry_type,
            req.body.company,
            req.body.street,
            req.body.number,
            req.body.zip,
            req.body.city,
            req.body.country,
            req.body.password,
            req.body.question,
            req.body.answer,
            req.body.email
        ]
    );

  var userScheme = getUserScheme(req);

  if (!userScheme.username || !req.body.password) {
    return res.status(400).send("You must send the username and the password");
  }

  var user = _.find(users, userScheme.userSearch);

  if (!user) {
    return res.status(401).send("The username or password don't match");
  }

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

app.post('/device/create', function (req, res)
{
  var db = new sqlite3.Database('database/devicer.sqlite');

  db.serialize(function()
  {
    db.run(
        "INSERT INTO device " +
        "('technology', 'devicelabel', 'serialnumber', 'procmedium', 'comment', 'mInterval', 'mBeginning'," +
        "'calibration', 'maintenance', 'maintenanceMsg', 'cInterval', 'calibrationMsg', 'cBeginning')" +
        "VALUES " +
        "($technology, $devicelabel, $serialnumber, $procmedium, $comment, $mInterval, $mBeginning," +
        "$calibration, $maintenance, $maintenanceMsg, $cInterval, $calibrationMsg, $cBeginning)" +
        {
          $technology: req.body.technology,
          $devicelabel: req.body.devicelabel,
          $serialnumber: req.body.serialnumber,
          $procmedium: req.body.procmedium,
          $comment: req.body.comment,
          $mInterval: req.body.mInterval,
          $mBeginning: req.body.mBeginning,
          $calibration: req.body.calibration,
          $maintenance: req.body.maintenance,
          $maintenanceMsg: req.body.maintenanceMsg,
          $cInterval: req.body.cInterval,
          $calibrationMsg: req.body.calibrationMsg,
          $cBeginning: req.body.cBeginning
        }
    );
  });
});

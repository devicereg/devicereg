var express = require('express'),
    _       = require('lodash'),
    config  = require('./config'),
    jwt     = require('jsonwebtoken');

var app = module.exports = express.Router();
var Nedb = require('nedb'),
    userdb = new Nedb({filename: 'userdb.db', autoload:true});

// XXX: This should be a database of users :).
var users = [];
users = userdb.find({});

function createToken(user) {
  return jwt.sign(_.omit(user, 'password'), config.secret, { expiresIn: 60*60*5 });
}

app.post('/users', function(req, res) {
  
  if (!req.body.password) {
    return res.status(400).send("You must send the username and the password");
  }

  if (userdb.find({username: req.body.username})) {
   return res.status(400).send("A user with that username already exists");
  }

  var profile = {username: req.body.username, password: req.body.password};
  userdb.insert(profile);

  res.status(201).send({
    id_token: createToken(profile)
  });
});

app.post('/sessions/create', function(req, res) {

  if (!req.body.password) {
    return res.status(400).send("You must send the username and the password");
  }

  var user = userdb.find({username: req.body.username});
  
  if (!user) {
    return res.status(401).send("The username or password don't match");
  }

  if (user.password !== req.body.password) {
    return res.status(401).send("The username or password don't match");
  }

  res.status(201).send({
    id_token: createToken(user)
  });
});

var express           =  require('express'),
    _                 = require('lodash'),
    config            = require('./config'),
    jwt               = require('jsonwebtoken'),
    sqlite3           = require('sqlite3').verbose(),
    nodemailer        = require('nodemailer'),
    sendmailTransport = require('nodemailer-sendmail-transport');

const sqliteJSON = require('sqlite-json');
const exporter = sqliteJSON('database/devicer.sqlite');
var db = new sqlite3.Database('database/devicer.sqlite');

var app = module.exports = express.Router();

function createToken(user) 
{
  return jwt.sign(_.omit(user, 'password'), config.secret, { expiresIn: 60*60*5 });
}

function getTokenFromRequest(request)
{
  let authorisationHeader = request.headers.authorization;
  return authorisationHeader.substr(7);
}

app.post('/user/create', function(req, res)
{
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
        req.body.email,
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
  db.serialize(function()
  {
    db.get("SELECT * FROM user WHERE email = ? AND password = ?",
      [req.body.email, req.body.password],
      function(err, row)
      {
        if(typeof row != 'undefined')
        {
          console.log("User email: " + req.body.email);

          jwt_token = createToken(row);
          console.log("User object: " + JSON.stringify(row));
          console.log("JWT Token: " + jwt_token);

          res.status(201).send({id_token: jwt_token, user_id: row.id});
        }
        else
        {
          res.status(401).send({
            message: "Der Benutzer mit der E-Mail Adresse '" + req.body.email + "' konnte nicht gefunden werden."
          });
        }
      }
    );
  });
});

app.post('/device/create', function (req, res)
{
  jwt.verify(getTokenFromRequest(req), config.secret, function(err, decoded) {
    db.run(
        "INSERT INTO device " +
        "('technology_id', 'devicelabel', 'serialnumber', 'procmedium', 'comment', 'tag', 'mInterval', 'mBeginning'," +
        "'calibration', 'maintenance', 'maintenanceMsg', 'cInterval', 'calibrationMsg', 'cBeginning', 'category_id', 'user_id')" +
        "VALUES " +
        "($technology_id, $devicelabel, $serialnumber, $procmedium, $comment, $tag, $mInterval, $mBeginning," +
        "$calibration, $maintenance, $maintenanceMsg, $cInterval, $calibrationMsg, $cBeginning, $category, $user)",
        {
          $technology_id: req.body.technology_id,
          $devicelabel: req.body.devicelabel,
          $serialnumber: req.body.serialnumber,
          $procmedium: req.body.procmedium,
          $comment: req.body.comment,
          $tag: req.body.tag,
          $mInterval: req.body.mInterval,
          $mBeginning: req.body.mBeginning,
          $calibration: req.body.calibration,
          $maintenance: req.body.maintenance,
          $maintenanceMsg: req.body.maintenanceMsg,
          $cInterval: req.body.cInterval,
          $calibrationMsg: req.body.calibrationMsg,
          $cBeginning: req.body.cBeginning,
          $category: req.body.category_id,
          $user: decoded.id
        },
        function (err) {
          res.status(201).send({
            message: "Gerät wurde angelegt!",
            id: this.lastID
          });
        }
    );
  });
});

app.post('/device/update', function (req, res)
{
  jwt.verify(getTokenFromRequest(req), config.secret, function(err, decoded) {
    db.run(
      "UPDATE device " +
      "SET technology_id=?, devicelabel=?, serialnumber=?, procmedium=?, comment=?, tag=?,mInterval=?, mBeginning=?, " +
      "calibration=?, maintenance=?, maintenanceMsg=?, cInterval=?, calibrationMsg=?, cBeginning=?, category_id=?, user_id=?" +
      "WHERE id=?",
      [
        req.body.technology_id,
        req.body.devicelabel,
        req.body.serialnumber,
        req.body.procmedium,
        req.body.comment,
        req.body.tag,
        req.body.mInterval,
        req.body.mBeginning,
        req.body.calibration,
        req.body.maintenance,
        req.body.maintenanceMsg,
        req.body.cInterval,
        req.body.calibrationMsg,
        req.body.cBeginning,
        req.body.category_id,
        decoded.id,
        req.body.id
      ]
    );
  });
});

app.post('/reset-user-password', function (req, res)
{
  db.serialize(function()
  {
    db.get("SELECT * FROM user WHERE email = ?", [req.body.email],
        function(err, row)
        {
          console.log(row);
          if(typeof row != 'undefined')
          {
            jwt_token = createToken(row);

            // Transporter object using the direct transport protocol
            var transporter = nodemailer.createTransport({
              host: 'smtp.gmail.com',
              port: 465,
              secure: true, // use SSL
              auth: {
                  user: 'mock.mailserver@gmail.com',
                  pass: 'WekuTh7@ubaz'
              }
            });

            var htmlMailTemplate = '<p><b>Bitte klicken Sie den Link unten an, um ein neues Passwort eingeben zu können.</b></p><a href="http://localhost/#/reset-password/' +jwt_token+ '">Passwort zurücksetzen</a>';

            var mailOptions = {
              from: 'DeviceR <info@devicer.com>',
              to: req.body.email,
              subject: 'DeviceR Passwort zurückstetzen.',
              text: 'Bitte klicken Sie den Link unten an, um ein neues Passwort eingeben zu können',
              html: htmlMailTemplate
            };

            transporter.sendMail(mailOptions, function(error, info)
            {
              if(error)
              {
                  return console.log(error);
              }
              console.log('Message sent: ' + info.response);

              res.status(201).send({ message: "Es wurde eine E-Mail an die E-Mail Adresse <b>"+req.body.email+"</b> gesendet." });
            });
          }
          else
          {
            res.status(401).send({
              message: "Der Benutzer mit der E-Mail Adresse '" + req.body.email + "' konnte nicht gefunden werden."
            });
          }
        }
    );
  });
});

app.post('/create-new-password', function (req, res)
{
  db.serialize(function()
  {
    db.run("UPDATE user SET password = ? WHERE id = ?", [req.body.password, req.body.id],
        function(err)
        {
          
          console.log(req.body.password);
          console.log(req.body.id);

          if(!err)
          {
            res.status(201).send({
              message: "Neues Passwort wurde erfolgreich angelegt."
            });
          }
          else
          {
            res.status(401).send({
              message: "Es ist ein Fehler aufgetreten, bitte versuchen Sie es erneut."
            });
          }
        }
    );
  });
});

app.post('/device/delete', function(req, res)
{
  jwt.verify(getTokenFromRequest(req), config.secret, function(err, decoded) {
    db.run("DELETE FROM device WHERE id=$id AND user_id=$user_id",
      {
        $id: req.body.id,
        $user_id: decoded.id
      },
      function(err)
      {
        res.status(201).send({ message: "Gerät wurde erfolgreich gelöscht." });
      });
  });
});

app.get('/devices', function (req, res)
{
  jwt.verify(getTokenFromRequest(req), config.secret, function(err, decoded) {
    db.all(
      'SELECT d.*, c.name AS `category`, t.name AS `technology` from device d ' +
      'LEFT JOIN category AS c ON d.category_id = c.id ' +
      'LEFT JOIN technology AS t ON d.technology_id = t.id ' +
      'WHERE d.user_id = $user_id',
      {
        $user_id: decoded.id
      },
      function (err, row) {
        res.status(200).send(row);
      });
  });
});

app.get('/categories', function (req, res)
{
  jwt.verify(getTokenFromRequest(req), config.secret, function(err, decoded) {
    db.all(
        'SELECT c.* FROM category c WHERE c.user_id = $user_id',
        {
          $user_id: decoded.id
        },
        function (err, row) {
          res.status(200).send(row);
        }
    );
  });
});

app.get('/users', function (req, res)
{
  exporter.json('SELECT * from user', function (err, json) {
    console.log(json);
    res.status(200).send(json);
  });
});

app.get('/categories', function (req, res)
{
  exporter.json('SELECT id, name FROM category c WHERE c.user_id = 1', function (err, json) {
    console.log(json);
    res.status(200).send(json);
  });
});


app.post('/category/create', function (req, res)
{
  jwt.verify(getTokenFromRequest(req), config.secret, function(err, decoded) {
    db.run("INSERT INTO category (name, user_id) VALUES ($name, $user_id)",
      {
        $name: req.body.name,
        $user_id: decoded.id
      },
      function(err)
      {
        res.status(201).send({ message: "Kategorie wurde erfolgreich hinzugefügt.", id: this.lastID});
      });
  })
});

app.get('/technologies', function (req, res) {
  db.all("SELECT t.* FROM technology t", function (err, row) {
    res.status(200).send(row);
  });
});

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

          if(typeof row != 'undefined')
          {
            jwt_token = createToken(row);
            console.log("User object: " + row);
            console.log("JWT Token: " + jwt_token);

            res.status(201).send({id_token: jwt_token});
          }
          else
          {
            res.status(401).send({
              message: "Der Benutzer mit der E-Mail Adresse '" + req.body.email + "' konnte nicht gefunden werden."
            });
          }
          // jwt_token = createToken(row);
          // console.log("User object: " + row);
          // console.log("JWT Token: " + jwt_token);

          // res.status(201).send({id_token: jwt_token});
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
  db.serialize(function()
  {
    db.run(
      "INSERT INTO device " +
      "('technology', 'devicelabel', 'serialnumber', 'procmedium', 'comment', 'mInterval', 'mBeginning'," +
      "'calibration', 'maintenance', 'maintenanceMsg', 'cInterval', 'calibrationMsg', 'cBeginning', 'category_id', 'user_id')" +
      "VALUES " +
      "($technology, $devicelabel, $serialnumber, $procmedium, $comment, $mInterval, $mBeginning," +
      "$calibration, $maintenance, $maintenanceMsg, $cInterval, $calibrationMsg, $cBeginning, $category, $user)",
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
        $cBeginning: req.body.cBeginning,
        $category: req.body.category,
        $user: 1 //@TODO
      }
    );
  });
});


// app.get('/reset-user-password', function(req, res)
// {
//   var transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true, // use SSL
//     auth: {
//         user: 'mock.mailserver@gmail.com',
//         pass: 'WekuTh7@ubaz'
//     }
//   });

//   var mailOptions = {
//     from: 'DeviceR  <info@devicer.com>',
//     to: 'volkan.oezgen@web.de', 
//     subject: 'Reset Password',
//     text: 'Bitte klicken Sie den Link unten an, um ein neues Passwort eingeben zu können.',
//     html: '<p><b>Bitte klicken Sie den Link unten an, um ein neues Passwort eingeben zu können.</b></p><a href="http://localhost/#/reset-password">Reset password</a>'
//   };

//   transporter.sendMail(mailOptions, function(error, info)
//   {
//     if(error)
//     {
//         return console.log(error);
//     }
//     console.log('Message sent: ' + info.response);
//   });
// });

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

app.post('/device/delete', function(req, res)
{
  db.serialize(function()
  {
    db.run("DELETE FROM device WHERE id=$id AND user_id=$user_id",
      {
        $id: req.body.id,
        $user_id: 1 //@TODO
      },
      function(err)
      {
        res.status(201).send({ message: "Gerät wurde erfolgreich gelöscht." });
      });
  });
});

app.get('/devices', function (req, res)
{
  exporter.json('SELECT d.*, c.name AS `category_name` from device d LEFT JOIN category AS c ON d.category_id = c.id WHERE d.user_id = 1', function (err, json) {
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
  db.serialize(function() {
    db.run("INSERT INTO category (name, user_id) VALUES ($name, $user_id)",
      {
        $name: req.body.name,
        $user_id: 1
      },
      function(err)
      {
        res.status(201).send({ message: "Kategorie wurde erfolgreich hinzugefügt." });
      });
  })
});

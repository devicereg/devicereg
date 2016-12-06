var sqlite3 = require('sqlite3').verbose();

/**
 * Create SQLite database
 */
var db = new sqlite3.Database('/src/app/database/devicer.sqlite');

db.serialize(function() {

  db.run(
  	"CREATE TABLE if not exists user (" +
  		"id INTEGER PRIMARY KEY AUTOINCREMENT," +
	  	"lastname TEXT," +
	  	"name TEXT," +
	  	"email TEXT," +
	  	"street TEXT," +
	  	"housenumber TEXT," +
	  	"zip TEXT," +
	  	"city TEXT," +
	  	"password TEXT,"+
	  	"UNIQUE(email))"
  );

  db.run(
    "CREATE TABLE IF NOT EXISTS category (" +
      "id INTEGER PRIMARY KEY AUTOINCREMENT," +
      "name TEXT," +
	  "user_id INTEGER," +
      "FOREIGN KEY(user_id) REFERENCES user(id))"
  );

  db.run(
    "CREATE TABLE IF NOT EXISTS device (" +
      "id INTEGER PRIMARY KEY AUTOINCREMENT," +
      "technology TEXT," +
      "devicelabel TEXT," +
      "serialnumber TEXT," +
      "procmedium TEXT," +
      "comment TEXT," +
      "mInterval TEXT," +
      "mBeginning TEXT," +
      "calibration TEXT," +
      "maintenance TEXT," +
      "maintenanceMsg TEXT," +
      "cInterval TEXT," +
      "calibrationMsg TEXT," +
      "cBeginning TEXT," +
	  "user_id INTEGER," +
	  "category_id INTEGER," +
      "FOREIGN KEY(category_id) REFERENCES category(id)," +
      "FOREIGN KEY(user_id) REFERENCES user(id))"
  );
  
  console.log("created mock database for DeviceR with 'user' table.");
});
db.close();
var sqlite3 = require('sqlite3').verbose();

/**
 * Create SQLite database
 */
var db = new sqlite3.Database('src/app/database/devicer.sqlite');

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
  
  console.log("created mock database for DeviceR with 'user' table.");
});
db.close();
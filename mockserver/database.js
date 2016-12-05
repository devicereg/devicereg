var sqlite3 = require('sqlite3').verbose();

/**
 * Create SQLite database
 */
var db = new sqlite3.Database('src/app/database/devicer.sqlite');

db.serialize(function() {


    console.log("created mock database for DeviceR with 'user' table.");
});
db.run(
    "CREATE TABLE if not exists user (" +
    "id INTEGER PRIMARY KEY AUTOINCREMENT," +
    "gender TEXT," +
    "surname TEXT," +
    "prename TEXT," +
    "language TEXT," +
    "phone TEXT," +
    "industry_family TEXT," +
    "industry_type TEXT," +
    "company TEXT," +
    "street TEXT," +
    "number TEXT," +
    "zip TEXT," +
    "city TEXT," +
    "country TEXT," +
    "password TEXT," +
    "question TEXT," +
    "answer TEXT,"+
    "email TEXT," +
    "UNIQUE(email))"
);
db.close();
var sqlite3 = require('sqlite3').verbose();

/**
 * Create SQLite database
 */
var db = new sqlite3.Database('/src/app/database/devicer.sqlite');

db.serialize(function() {

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
        "role TEXT," +
        "UNIQUE(email))"
    );

  console.log("user created");

    db.run(
      "CREATE TABLE IF NOT EXISTS category (" +
        "id INTEGER PRIMARY KEY AUTOINCREMENT," +
        "user_id INTEGER," +
        "name TEXT," +
        "FOREIGN KEY(user_id) REFERENCES user(id)" +
        ")"
    );

  console.log("category created");

    db.run(
      "CREATE TABLE IF NOT EXISTS technology (" +
      "id INTEGER PRIMARY KEY AUTOINCREMENT," +
      "name TEXT NOT NULL" +
      ")"
    );

  console.log("technology created");

    db.run(
        "CREATE TABLE IF NOT EXISTS device (" +
        "id INTEGER PRIMARY KEY AUTOINCREMENT," +
        "category_id INTEGER," +
        "user_id INTEGER," +
        "technology_id INTEGER," +
        "devicelabel TEXT," +
        "serialnumber TEXT," +
        "procmedium TEXT," +
        "comment TEXT," +
        "tag INTEGER," +
        "mInterval TEXT," +
        "mBeginning TEXT," +
        "calibration TEXT," +
        "maintenance TEXT," +
        "maintenanceMsg TEXT," +
        "cInterval TEXT," +
        "calibrationMsg TEXT," +
        "cBeginning TEXT," +
        "FOREIGN KEY(category_id) REFERENCES category(id)," +
        "FOREIGN KEY(user_id) REFERENCES user(id)," +
        "FOREIGN KEY(technology_id) REFERENCES technology(id)" +
        ")"
    );

  console.log("device created");
});

console.log("created mock database for DeviceR");

db.close();

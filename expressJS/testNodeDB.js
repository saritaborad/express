let mysql = require("mysql");
let connData = {
  host: "localhost",
  user: "root",
  password: "sarita",
  database: "node",
};

function showPerson() {
  let connection = mysql.createConnection(connData);
  let sql = "SELECT * FROM persons";
  connection.query(sql, function (err, result) {
    if (err) console.log("error in database", err.message);
    else console.log(result);
  });
}

function showPersonByName(name) {
  let connection = mysql.createConnection(connData);
  let sql = "SELECT * FROM persons WHERE name=?";
  connection.query(sql, name, function (err, result) {
    if (err) console.log(err);
    else console.log(result);
  });
}

function insertPerson(params) {
  let connection = mysql.createConnection(connData);
  let sql = "INSERT INTO persons(name,age) VALUES(?,?)";
  connection.query(sql, params, function (err, result) {
    if (err) console.log(err);
    else console.log("Id of inserted record", result.insertId);
  });
}

function insertPersons(params) {
  let connection = mysql.createConnection(connData);
  let sql = "INSERT INTO persons(name,age) VALUES ?";
  connection.query(sql, [params], function (err, result) {
    if (err) console.log(err);
    else console.log(result);
  });
}

function incrementAge(id) {
  let connection = mysql.createConnection(connData);
  let sql = "UPDATE persons SET age=age+1 WHERE id=?";
  connection.query(sql, id, function (err, result) {
    if (err) console.log(err);
    else console.log(result);
  });
}

function changeAge(id, newAge) {
  let connection = mysql.createConnection(connData);
  let sql = "UPDATE persons SET age=? WHERE id=?";
  connection.query(sql, [newAge, id], function (err, result) {
    if (err) console.log(err);
    else console.log(result);
  });
}

function resetPerson() {
  connection = mysql.createConnection(connData);
  sql1 = "DELETE FROM persons";
  connection.query(sql1, function (err, result1) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully Deleted", result1.affectedRows);
      let { persons } = require("./students.js");
      let arr = persons.map((p1) => [p1.name, p1.age]);
      let sql2 = "INSERT INTO persons(name,age) VALUES ?";
      connection.query(sql2, [arr], function (err, result) {
        if (err) console.log(err);
        else console.log("Successfully Inserted", result.affectedRows);
      });
    }
  });
}
resetPerson();
// changeAge(3, 33);
// incrementAge(3);

// insertPersons([
//   ["Jim", 30],
//   ["Amy", 30],
//   ["steven", 23],
// ]);
// insertPerson(["Riya", 25]);
// showPersonByName("Riya");
// showPerson();

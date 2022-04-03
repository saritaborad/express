let mysql = require("mysql");
let connData = {
  host: "localhost",
  user: "root",
  password: "sarita",
  database: "node",
};

function getConnection() {
  return mysql.createConnection(connData);
}

module.exports.getConnection = getConnection;

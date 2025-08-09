const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@Logicals92",
  database: "isofos_project",
});

module.exports = connection;

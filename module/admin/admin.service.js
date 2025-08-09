const connection = require("../../config/DBconnect");

const registerAdmin = async (data) => {
  const sql = "INSERT INTO manager SET ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, data, (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const getAllManagers = async () => {
  const sql = "SELECT * FROM manager";
  return new Promise((resolve, reject) => {
    connection.query(sql, (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

module.exports = {
  registerAdmin,
  getAllManagers,
};

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

const getManagerById = async (id) => {
  const sql = "SELECT * FROM manager WHERE id = ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, [id], (error, results) => {
      if (error) return reject(error);
      resolve(results[0]);
    });
  });
}

module.exports = {
  registerAdmin,
  getAllManagers,
  getManagerById
};

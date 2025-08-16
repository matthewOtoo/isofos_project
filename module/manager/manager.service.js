const connection = require("../../config/DBconnect");

const registerManager = async (data) => {
  const sql = "INSERT INTO managers SET ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, data, (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const getAllManagers = async () => {
  const sql = "SELECT * FROM managers";
  return new Promise((resolve, reject) => {
    connection.query(sql, (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const getManagerById = async (id) => {
  const sql = "SELECT * FROM managers WHERE id = ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, [id], (error, results) => {
      if (error) return reject(error);
      resolve(results[0]);
    });
  });
};

const getManagerByEmail = async (email) => {
  const sql = "SELECT * FROM managers WHERE email = ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, [email], (error, results) => {
      if (error) return reject(error);
      resolve(results[0]);
    });
  });
};


const deleteManagerById = async (id) => {
  const sql = "DELETE FROM managers WHERE id = ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, [id], (error, results) => {
      if (error) return reject(error);
      resolve(results.affectedRows > 0);
    });
  });
};


const authService = {
  


}

module.exports = {
  registerManager,
  getAllManagers,
  getManagerById,
  deleteManagerById,
  getManagerByEmail
};

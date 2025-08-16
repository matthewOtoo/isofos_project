const connection = require("../../config/DBconnect");

const createProjectType = async (data) => {
  const sql = "INSERT INTO project_types SET ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, data, (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const getAllProjectTypes = async () => {
  const sql = "SELECT * FROM project_types";
  return new Promise((resolve, reject) => {
    connection.query(sql, (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const getProjectTypeById = async (id) => {
  const sql = "SELECT * FROM project_types WHERE id = ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, [id], (error, results) => {
      if (error) return reject(error);
      resolve(results[0]);
    });
  });
};


const deleteProjectTypeById = async (id) => {
  const sql = "DELETE FROM project_types WHERE id = ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, [id], (error, results) => {
      if (error) return reject(error);
      resolve(results.affectedRows > 0);
    });
  });
};

module.exports = {
  createProjectType,
  getAllProjectTypes,
  getProjectTypeById,
  deleteProjectTypeById
};
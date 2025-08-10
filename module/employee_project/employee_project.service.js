const connection = require("../../config/DBconnect");

const getAllEmployeeProjects = async () => {
  const sql = "SELECT * FROM employee_project";
  return new Promise((resolve, reject) => {
    connection.query(sql, (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const getProjectsByEmployee = async (em_id) => {
  const sql = `
    SELECT p.* 
    FROM project p
    JOIN employee_project ep ON p.pro_id = ep.pro_id
    WHERE ep.em_id = ?
  `;
  return new Promise((resolve, reject) => {
    connection.query(sql, [em_id], (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const getEmployeesByProject = async (pro_id) => {
  const sql = `
    SELECT e.* 
    FROM employee e
    JOIN employee_project ep ON e.em_id = ep.em_id
    WHERE ep.pro_id = ?
  `;
  return new Promise((resolve, reject) => {
    connection.query(sql, [pro_id], (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

module.exports = {
  getAllEmployeeProjects,
  getProjectsByEmployee,
  getEmployeesByProject,
};

const connection = require("../../config/DBconnect");

const assignEmployeeToProject = async (data) => {
  const sql = "INSERT INTO project_employees SET ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, data, (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const getProjectEmployees = async (projectId) => {
  const sql = `
    SELECT pe.*, e.first_name, e.last_name, e.position, e.base_salary
    FROM project_employees pe
    JOIN employees e ON pe.employee_id = e.id
    WHERE pe.project_id = ?
  `;
  return new Promise((resolve, reject) => {
    connection.query(sql, [projectId], (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const updateEmployeeProjectAssignment = async (id, data) => {
  const sql = "UPDATE project_employees SET ? WHERE id = ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, [data, id], (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const removeEmployeeFromProject = async (id) => {
  const sql = "DELETE FROM project_employees WHERE id = ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, [id], (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const getEmployeeAssignmentById = async (id) => {
  const sql = "SELECT * FROM project_employees WHERE id = ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, [id], (error, results) => {
      if (error) return reject(error);
      resolve(results[0]);
    });
  });
};

module.exports = {
  assignEmployeeToProject,
  getProjectEmployees,
  updateEmployeeProjectAssignment,
  removeEmployeeFromProject,
  getEmployeeAssignmentById
};
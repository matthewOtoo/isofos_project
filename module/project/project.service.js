const connection = require("../../config/DBconnect");

const createProject = async (data) => {
  const sql = "INSERT INTO projects SET ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, data, (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const getAllProjects = async () => {
  const sql = `
    SELECT p.*, c.name as client_name, pt.type_name as project_type 
    FROM projects p
    JOIN clients c ON p.client_id = c.id
    JOIN project_types pt ON p.project_type_id = pt.id
  `;
  return new Promise((resolve, reject) => {
    connection.query(sql, (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const getProjectById = async (id) => {
  const sql = `
    SELECT p.*, c.name as client_name, pt.type_name as project_type 
    FROM projects p
    JOIN clients c ON p.client_id = c.id
    JOIN project_types pt ON p.project_type_id = pt.id
    WHERE p.id = ?
  `;
  return new Promise((resolve, reject) => {
    connection.query(sql, [id], (error, results) => {
      if (error) return reject(error);
      resolve(results[0]);
    });
  });
};

const updateProject = async (id, data) => {
  const sql = "UPDATE projects SET ? WHERE id = ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, [data, id], (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const deleteProject = async (id) => {
  const sql = "DELETE FROM projects WHERE id = ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, [id], (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const getProjectsByStatus = async (status) => {
  const sql = `
    SELECT p.*, c.name as client_name, pt.type_name as project_type 
    FROM projects p
    JOIN clients c ON p.client_id = c.id
    JOIN project_types pt ON p.project_type_id = pt.id
    WHERE p.status = ?
  `;
  return new Promise((resolve, reject) => {
    connection.query(sql, [status], (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

module.exports = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
  getProjectsByStatus
};
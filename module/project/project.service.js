const connection = require("../../config/DBconnect");

const createProject = async (data) => {
  const sql = "INSERT INTO projects SET ?";
  try {
    const [results] = await connection.query(sql, data);
    return results;
  } catch (error) {
    console.error('Error in createProject:', error);
    throw error;
  }
};

const getAllProjects = async () => {
  const sql = `
    SELECT p.*, c.name as client_name, pt.type_name as project_type 
    FROM projects p
    JOIN clients c ON p.client_id = c.id
    JOIN project_types pt ON p.project_type_id = pt.id
  `;
  try {
    const [results] = await connection.query(sql);
    return results;
  } catch (error) {
    console.error('Error in getAllProjects:', error);
    throw error;
  }
};

const getProjectById = async (id) => {
  const sql = `
    SELECT p.*, c.name as client_name, pt.type_name as project_type 
    FROM projects p
    JOIN clients c ON p.client_id = c.id
    JOIN project_types pt ON p.project_type_id = pt.id
    WHERE p.id = ?
  `;
  try {
    const [results] = await connection.query(sql, [id]);
    return results[0] || null;
  } catch (error) {
    console.error('Error in getProjectById:', error);
    throw error;
  }
};

const updateProject = async (id, data) => {
  const sql = "UPDATE projects SET ? WHERE id = ?";
  try {
    const [results] = await connection.query(sql, [data, id]);
    return results;
  } catch (error) {
    console.error('Error in updateProject:', error);
    throw error;
  }
};

const deleteProject = async (id) => {
  const sql = "DELETE FROM projects WHERE id = ?";
  try {
    const [results] = await connection.query(sql, [id]);
    return results;
  } catch (error) {
    console.error('Error in deleteProject:', error);
    throw error;
  }
};

const getProjectsByStatus = async (status) => {
  const sql = `
    SELECT p.*, c.name as client_name, pt.type_name as project_type 
    FROM projects p
    JOIN clients c ON p.client_id = c.id
    JOIN project_types pt ON p.project_type_id = pt.id
    WHERE p.status = ?
  `;
  try {
    const [results] = await connection.query(sql, [status]);
    return results;
  } catch (error) {
    console.error('Error in getProjectsByStatus:', error);
    throw error;
  }
};

module.exports = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
  getProjectsByStatus
};
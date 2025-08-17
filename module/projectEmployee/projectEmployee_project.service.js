const connection = require("../../config/DBconnect");

const assignEmployeeToProject = async (data) => {
  const sql = "INSERT INTO project_employees SET ?";
  try {
    const [results] = await connection.query(sql, data);
    return results;
  } catch (error) {
    console.error('Error in assignEmployeeToProject:', error);
    throw error;
  }
};

const getProjectEmployees = async (projectId) => {
  const sql = `
    SELECT pe.*, e.first_name, e.last_name, e.position, e.base_salary
    FROM project_employees pe
    JOIN employees e ON pe.employee_id = e.id
    WHERE pe.project_id = ?
  `;
  try {
    const [results] = await connection.query(sql, [projectId]);
    return results;
  } catch (error) {
    console.error('Error in getProjectEmployees:', error);
    throw error;
  }
};

const updateEmployeeProjectAssignment = async (id, data) => {
  const sql = "UPDATE project_employees SET ? WHERE id = ?";
  try {
    const [results] = await connection.query(sql, [data, id]);
    return results;
  } catch (error) {
    console.error('Error in updateEmployeeProjectAssignment:', error);
    throw error;
  }
};

const removeEmployeeFromProject = async (id) => {
  const sql = "DELETE FROM project_employees WHERE id = ?";
  try {
    const [results] = await connection.query(sql, [id]);
    return results;
  } catch (error) {
    console.error('Error in removeEmployeeFromProject:', error);
    throw error;
  }
};

const getEmployeeAssignmentById = async (id) => {
  const sql = "SELECT * FROM project_employees WHERE id = ?";
  try {
    const [results] = await connection.query(sql, [id]);
    return results[0] || null;
  } catch (error) {
    console.error('Error in getEmployeeAssignmentById:', error);
    throw error;
  }
};

module.exports = {
  assignEmployeeToProject,
  getProjectEmployees,
  updateEmployeeProjectAssignment,
  removeEmployeeFromProject,
  getEmployeeAssignmentById
};
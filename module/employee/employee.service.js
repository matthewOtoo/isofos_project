const connection = require("../../config/DBconnect");

const createEmployee = async (data) => {
  const sql = "INSERT INTO employees SET ?";
  try {
    const [results] = await connection.query(sql, data);
    return results;
  } catch (error) {
    console.error('Error in createEmployee:', error);
    throw error;
  }
};

const getAllEmployees = async () => {
  const sql = "SELECT * FROM employees";
  try {
    const [results] = await connection.query(sql);
    return results;
  } catch (error) {
    console.error('Error in getAllEmployees:', error);
    throw error;
  }
};

const getEmployeeById = async (id) => {
  const sql = "SELECT * FROM employees WHERE id = ?";
  try {
    const [results] = await connection.query(sql, [id]);
    return results[0] || null;
  } catch (error) {
    console.error('Error in getEmployeeById:', error);
    throw error;
  }
};

const updateEmployee = async (id, data) => {
  const sql = "UPDATE employees SET ? WHERE id = ?";
  try {
    const [results] = await connection.query(sql, [data, id]);
    return results;
  } catch (error) {
    console.error('Error in updateEmployee:', error);
    throw error;
  }
};

const deleteEmployee = async (id) => {
  const sql = "DELETE FROM employees WHERE id = ?";
  try {
    const [results] = await connection.query(sql, [id]);
    return results;
  } catch (error) {
    console.error('Error in deleteEmployee:', error);
    throw error;
  }
};

module.exports = {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee
};
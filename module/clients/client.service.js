const connection = require("../../config/DBconnect");

const createClient = async (data) => {
  const sql = "INSERT INTO clients SET ?";
  try {
    const [results] = await connection.query(sql, data);
    return results;
  } catch (error) {
    console.error('Error in createClient:', error);
    throw error;
  }
};

const getAllClients = async () => {
  const sql = "SELECT * FROM clients";
  try {
    const [results] = await connection.query(sql);
    return results;
  } catch (error) {
    console.error('Error in getAllClients:', error);
    throw error;
  }
};

const getClientById = async (id) => {
  const sql = "SELECT * FROM clients WHERE id = ?";
  try {
    const [results] = await connection.query(sql, [id]);
    return results[0] || null;
  } catch (error) {
    console.error('Error in getClientById:', error);
    throw error;
  }
};

const updateClient = async (id, data) => {
  const sql = "UPDATE clients SET ? WHERE id = ?";
  try {
    const [results] = await connection.query(sql, [data, id]);
    return results;
  } catch (error) {
    console.error('Error in updateClient:', error);
    throw error;
  }
};

const deleteClient = async (id) => {
  const sql = "DELETE FROM clients WHERE id = ?";
  try {
    const [results] = await connection.query(sql, [id]);
    return results;
  } catch (error) {
    console.error('Error in deleteClient:', error);
    throw error;
  }
};

module.exports = {
  createClient,
  getAllClients,
  getClientById,
  updateClient,
  deleteClient
};
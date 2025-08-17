const connection = require("../../config/DBconnect");

const createSupplier = async (data) => {
  const sql = "INSERT INTO suppliers SET ?";
  try {
    const [results] = await connection.query(sql, data);
    return results;
  } catch (error) {
    console.error('Error in createSupplier:', error);
    throw error;
  }
};

const getAllSuppliers = async () => {
  const sql = "SELECT * FROM suppliers";
  try {
    const [results] = await connection.query(sql);
    return results;
  } catch (error) {
    console.error('Error in getAllSuppliers:', error);
    throw error;
  }
};

const getSupplierById = async (id) => {
  const sql = "SELECT * FROM suppliers WHERE id = ?";
  try {
    const [[results]] = await connection.query(sql, [id]);
    return results || null;
  } catch (error) {
    console.error('Error in getSupplierById:', error);
    throw error;
  }
};

const updateSupplier = async (id, data) => {
  const sql = "UPDATE suppliers SET ? WHERE id = ?";
  try {
    const [results] = await connection.query(sql, [data, id]);
    return results;
  } catch (error) {
    console.error('Error in updateSupplier:', error);
    throw error;
  }
};

const deleteSupplier = async (id) => {
  const sql = "DELETE FROM suppliers WHERE id = ?";
  try {
    const [results] = await connection.query(sql, [id]);
    return results;
  } catch (error) {
    console.error('Error in deleteSupplier:', error);
    throw error;
  }
};

module.exports = {
  createSupplier,
  getAllSuppliers,
  getSupplierById,
  updateSupplier,
  deleteSupplier
};
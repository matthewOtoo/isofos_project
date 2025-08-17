const connection = require("../../config/DBconnect");

const createRack = async (data) => {
  const sql = "INSERT INTO warehouse_racks SET ?";
  try {
    const [results] = await connection.query(sql, data);
    return results;
  } catch (error) {
    console.error('Error in createRack:', error);
    throw error;
  }
};

const getAllRacks = async () => {
  const sql = "SELECT * FROM warehouse_racks";
  try {
    const [results] = await connection.query(sql);
    return results;
  } catch (error) {
    console.error('Error in getAllRacks:', error);
    throw error;
  }
};

const getRackById = async (id) => {
  const sql = "SELECT * FROM warehouse_racks WHERE id = ?";
  try {
    const [[results]] = await connection.query(sql, [id]);
    return results || null;
  } catch (error) {
    console.error('Error in getRackById:', error);
    throw error;
  }
};

const updateRack = async (id, data) => {
  const sql = "UPDATE warehouse_racks SET ? WHERE id = ?";
  try {
    const [results] = await connection.query(sql, [data, id]);
    return results;
  } catch (error) {
    console.error('Error in updateRack:', error);
    throw error;
  }
};

const deleteRack = async (id) => {
  const sql = "DELETE FROM warehouse_racks WHERE id = ?";
  try {
    const [results] = await connection.query(sql, [id]);
    return results;
  } catch (error) {
    console.error('Error in deleteRack:', error);
    throw error;
  }
};

module.exports = {
  createRack,
  getAllRacks,
  getRackById,
  updateRack,
  deleteRack
};
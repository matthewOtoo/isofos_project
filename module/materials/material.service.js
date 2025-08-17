const connection = require("../../config/DBconnect");

const createMaterial = async (data) => {
  const sql = "INSERT INTO materials SET ?";
  try {
    const [results] = await connection.query(sql, data);
    return results;
  } catch (error) {
    console.error('Error in createMaterial:', error);
    throw error;
  }
};

const getAllMaterials = async () => {
  const sql = "SELECT m.*, s.name as supplier_name FROM materials m JOIN suppliers s ON m.supplier_id = s.id";
  try {
    const [results] = await connection.query(sql);
    return results;
  } catch (error) {
    console.error('Error in getAllMaterials:', error);
    throw error;
  }
};

const getMaterialById = async (id) => {
  const sql = "SELECT m.*, s.name as supplier_name FROM materials m JOIN suppliers s ON m.supplier_id = s.id WHERE m.id = ?";
  try {
    const [results] = await connection.query(sql, [id]);
    return results[0] || null;
  } catch (error) {
    console.error('Error in getMaterialById:', error);
    throw error;
  }
};

const updateMaterial = async (id, data) => {
  const sql = "UPDATE materials SET ? WHERE id = ?";
  try {
    const [results] = await connection.query(sql, [data, id]);
    return results;
  } catch (error) {
    console.error('Error in updateMaterial:', error);
    throw error;
  }
};

const deleteMaterial = async (id) => {
  const sql = "DELETE FROM materials WHERE id = ?";
  try {
    const [results] = await connection.query(sql, [id]);
    return results;
  } catch (error) {
    console.error('Error in deleteMaterial:', error);
    throw error;
  }
};

module.exports = {
  createMaterial,
  getAllMaterials,
  getMaterialById,
  updateMaterial,
  deleteMaterial
};
const connection = require("../../config/DBconnect");

const createMaterial = async (data) => {
  const sql = "INSERT INTO materials SET ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, data, (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const getAllMaterials = async () => {
  const sql = "SELECT m.*, s.name as supplier_name FROM materials m JOIN suppliers s ON m.supplier_id = s.id";
  return new Promise((resolve, reject) => {
    connection.query(sql, (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const getMaterialById = async (id) => {
  const sql = "SELECT m.*, s.name as supplier_name FROM materials m JOIN suppliers s ON m.supplier_id = s.id WHERE m.id = ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, [id], (error, results) => {
      if (error) return reject(error);
      resolve(results[0]);
    });
  });
};

const updateMaterial = async (id, data) => {
  const sql = "UPDATE materials SET ? WHERE id = ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, [data, id], (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const deleteMaterial = async (id) => {
  const sql = "DELETE FROM materials WHERE id = ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, [id], (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

module.exports = {
  createMaterial,
  getAllMaterials,
  getMaterialById,
  updateMaterial,
  deleteMaterial
};
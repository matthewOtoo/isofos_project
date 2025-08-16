const connection = require("../../config/DBconnect");

const createRack = async (data) => {
  const sql = "INSERT INTO warehouse_racks SET ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, data, (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const getAllRacks = async () => {
  const sql = "SELECT * FROM warehouse_racks";
  return new Promise((resolve, reject) => {
    connection.query(sql, (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const getRackById = async (id) => {
  const sql = "SELECT * FROM warehouse_racks WHERE id = ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, [id], (error, results) => {
      if (error) return reject(error);
      resolve(results[0]);
    });
  });
};

const updateRack = async (id, data) => {
  const sql = "UPDATE warehouse_racks SET ? WHERE id = ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, [data, id], (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const deleteRack = async (id) => {
  const sql = "DELETE FROM warehouse_racks WHERE id = ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, [id], (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

module.exports = {
  createRack,
  getAllRacks,
  getRackById,
  updateRack,
  deleteRack
};
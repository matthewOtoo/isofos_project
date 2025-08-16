const connection = require("../../config/DBconnect");

const createSupplier = async (data) => {
  const sql = "INSERT INTO suppliers SET ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, data, (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const getAllSuppliers = async () => {
  const sql = "SELECT * FROM suppliers";
  return new Promise((resolve, reject) => {
    connection.query(sql, (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const getSupplierById = async (id) => {
  const sql = "SELECT * FROM suppliers WHERE id = ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, [id], (error, results) => {
      if (error) return reject(error);
      resolve(results[0]);
    });
  });
};

const updateSupplier = async (id, data) => {
  const sql = "UPDATE suppliers SET ? WHERE id = ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, [data, id], (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const deleteSupplier = async (id) => {
  const sql = "DELETE FROM suppliers WHERE id = ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, [id], (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

module.exports = {
  createSupplier,
  getAllSuppliers,
  getSupplierById,
  updateSupplier,
  deleteSupplier
};
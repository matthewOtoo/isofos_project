const connection = require("../../config/DBconnect");

const createClient = async (data) => {
  const sql = "INSERT INTO clients SET ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, data, (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const getAllClients = async () => {
  const sql = "SELECT * FROM clients";
  return new Promise((resolve, reject) => {
    connection.query(sql, (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const getClientById = async (id) => {
  const sql = "SELECT * FROM clients WHERE id = ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, [id], (error, results) => {
      if (error) return reject(error);
      resolve(results[0]);
    });
  });
};

const updateClient = async (id, data) => {
  const sql = "UPDATE clients SET ? WHERE id = ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, [data, id], (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const deleteClient = async (id) => {
  const sql = "DELETE FROM clients WHERE id = ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, [id], (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

module.exports = {
  createClient,
  getAllClients,
  getClientById,
  updateClient,
  deleteClient
};
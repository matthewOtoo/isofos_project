// const connection = require("../../config/DBconnect");

// const registerSupplier = async (data) => {
//   const sql = "INSERT INTO supplier SET ?";
//   return new Promise((resolve, reject) => {
//     connection.query(sql, data, (error, results) => {
//       if (error) return reject(error);
//       resolve(results);
//     });
//   });
// };

// const getAllSuppliers = async () => {
//   const sql = "SELECT * FROM supplier";
//   return new Promise((resolve, reject) => {
//     connection.query(sql, (error, results) => {
//       if (error) return reject(error);
//       resolve(results);
//     });
//   });
// };

// const getSupplierById = async (id) => {
//   const sql = "SELECT * FROM supplier WHERE sup_id = ?";
//   return new Promise((resolve, reject) => {
//     connection.query(sql, [id], (error, results) => {
//       if (error) return reject(error);
//       resolve(results[0]);
//     });
//   });
// };

// const getMaterialById = async (id) => {
//   const sql = "SELECT * FROM materials WHERE mat_id = ?";
//   return new Promise((resolve, reject) => {
//     connection.query(sql, [id], (error, results) => {
//       if (error) return reject(error);
//       resolve(results[0]);
//     });
//   });
// };

// module.exports = {
//   registerSupplier,
//   getAllSuppliers,
//   getSupplierById,
//   getMaterialById,
// };

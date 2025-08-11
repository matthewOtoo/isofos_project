// const connection = require("../../config/DBconnect");

// const registerMaterial = async (data) => {
//   const sql = "INSERT INTO materials SET ?";
//   return new Promise((resolve, reject) => {
//     connection.query(sql, data, (error, results) => {
//       if (error) return reject(error);
//       resolve(results);
//     });
//   });
// };

// const getAllMaterials = async () => {
//   const sql = "SELECT * FROM materials";
//   return new Promise((resolve, reject) => {
//     connection.query(sql, (error, results) => {
//       if (error) return reject(error);
//       resolve(results);
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
//   registerMaterial,
//   getAllMaterials,
//   getMaterialById,
// };

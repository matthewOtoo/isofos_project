// const connection = require("../../config/DBconnect");

// const registerProject = async (data) => {
//   const sql = "INSERT INTO project SET ?";
//   return new Promise((resolve, reject) => {
//     connection.query(sql, data, (error, results) => {
//       if (error) return reject(error);
//       resolve(results);
//     });
//   });
// };

// const getAllProjects = async () => {
//   const sql = "SELECT * FROM project";
//   return new Promise((resolve, reject) => {
//     connection.query(sql, (error, results) => {
//       if (error) return reject(error);
//       resolve(results);
//     });
//   });
// };

// const getProjectById = async (id) => {
//   const sql = "SELECT * FROM project WHERE pro_id = ?";
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

// const assignEmployeeToProject = async (em_id, pro_id) => {
//   const sql = "INSERT INTO employee_project (em_id, pro_id) VALUES (?, ?)";
//   return new Promise((resolve, reject) => {
//     connection.query(sql, [em_id, pro_id], (error, results) => {
//       if (error) return reject(error);
//       resolve(results);
//     });
//   });
// };

// module.exports = {
//   registerProject,
//   getAllProjects,
//   getProjectById,
//   getMaterialById,
//   assignEmployeeToProject,
// };

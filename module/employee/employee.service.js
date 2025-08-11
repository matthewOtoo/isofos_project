// const connection = require("../../config/DBconnect");

// const registerEmployee = async (data) => {
//   const sql = "INSERT INTO employee SET ?";
//   return new Promise((resolve, reject) => {
//     connection.query(sql, data, (error, results) => {
//       if (error) return reject(error);
//       resolve(results);
//     });
//   });
// };

// const getAllEmployees = async () => {
//     const sql = "SELECT * FROM employee";
//     return new Promise((resolve, reject) => {
//         connection.query(sql, (error, results) => {
//         if (error) return reject(error);
//         resolve(results);
//         });
//     }); 
// }

// module.exports = {
//     registerEmployee,
//     getAllEmployees
// }
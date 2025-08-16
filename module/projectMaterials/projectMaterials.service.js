const connection = require("../../config/DBconnect");

const allocateMaterialToProject = async (data) => {
  const sql = "INSERT INTO project_materials SET ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, data, (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const getProjectMaterials = async (projectId) => {
  const sql = `
    SELECT pm.*, m.name as material_name, m.unit_of_measure, m.unit_price,
           (pm.quantity * m.unit_price) as total_cost
    FROM project_materials pm
    JOIN materials m ON pm.material_id = m.id
    WHERE pm.project_id = ?
  `;
  return new Promise((resolve, reject) => {
    connection.query(sql, [projectId], (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const updateProjectMaterialAllocation = async (id, data) => {
  const sql = "UPDATE project_materials SET ? WHERE id = ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, [data, id], (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const removeMaterialFromProject = async (id) => {
  const sql = "DELETE FROM project_materials WHERE id = ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, [id], (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const getMaterialAllocationById = async (id) => {
  const sql = "SELECT * FROM project_materials WHERE id = ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, [id], (error, results) => {
      if (error) return reject(error);
      resolve(results[0]);
    });
  });
};

module.exports = {
  allocateMaterialToProject,
  getProjectMaterials,
  updateProjectMaterialAllocation,
  removeMaterialFromProject,
  getMaterialAllocationById
};
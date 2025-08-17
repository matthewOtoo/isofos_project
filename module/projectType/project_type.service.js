const connection = require("../../config/DBconnect");

const allocateMaterialToProject = async (data) => {
  const sql = "INSERT INTO project_materials SET ?";
  try {
    const [results] = await connection.query(sql, data);
    return results;
  } catch (error) {
    console.error('Error in allocateMaterialToProject:', error);
    throw error;
  }
};

const getProjectMaterials = async (projectId) => {
  const sql = `
    SELECT pm.*, m.name as material_name, m.unit_of_measure, m.unit_price,
           (pm.quantity * m.unit_price) as total_cost
    FROM project_materials pm
    JOIN materials m ON pm.material_id = m.id
    WHERE pm.project_id = ?
  `;
  try {
    const [results] = await connection.query(sql, [projectId]);
    return results;
  } catch (error) {
    console.error('Error in getProjectMaterials:', error);
    throw error;
  }
};

const updateProjectMaterialAllocation = async (id, data) => {
  const sql = "UPDATE project_materials SET ? WHERE id = ?";
  try {
    const [results] = await connection.query(sql, [data, id]);
    return results;
  } catch (error) {
    console.error('Error in updateProjectMaterialAllocation:', error);
    throw error;
  }
};

const removeMaterialFromProject = async (id) => {
  const sql = "DELETE FROM project_materials WHERE id = ?";
  try {
    const [results] = await connection.query(sql, [id]);
    return results;
  } catch (error) {
    console.error('Error in removeMaterialFromProject:', error);
    throw error;
  }
};

const getMaterialAllocationById = async (id) => {
  const sql = "SELECT * FROM project_materials WHERE id = ?";
  try {
    const [results] = await connection.query(sql, [id]);
    return results[0] || null;
  } catch (error) {
    console.error('Error in getMaterialAllocationById:', error);
    throw error;
  }
};

module.exports = {
  allocateMaterialToProject,
  getProjectMaterials,
  updateProjectMaterialAllocation,
  removeMaterialFromProject,
  getMaterialAllocationById
};
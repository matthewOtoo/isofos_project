const connection = require("../../config/DBconnect");

const getProjectCostReport = async (projectId) => {
  try {
    // Get material costs
    const materialCostSql = `
      SELECT SUM(pm.quantity * m.unit_price) as total_material_cost
      FROM project_materials pm
      JOIN materials m ON pm.material_id = m.id
      WHERE pm.project_id = ?
    `;
    const [[materialResults]] = await connection.query(materialCostSql, [projectId]);

    // Get labor costs
    const laborCostSql = `
      SELECT SUM(pe.salary_allocation) as total_labor_cost
      FROM project_employees pe
      WHERE pe.project_id = ?
    `;
    const [[laborResults]] = await connection.query(laborCostSql, [projectId]);

    // Get project details
    const projectSql = "SELECT budget FROM projects WHERE id = ?";
    const [[projectResults]] = await connection.query(projectSql, [projectId]);

    return {
      project_id: projectId,
      budget: projectResults.budget,
      material_cost: materialResults.total_material_cost || 0,
      labor_cost: laborResults.total_labor_cost || 0,
      total_cost: (materialResults.total_material_cost || 0) + 
                 (laborResults.total_labor_cost || 0)
    };
  } catch (error) {
    console.error('Error in getProjectCostReport:', error);
    throw error;
  }
};

const getEmployeeWorkloadReport = async () => {
  const sql = `
    SELECT 
      e.id, 
      CONCAT(e.first_name, ' ', e.last_name) as employee_name,
      e.position,
      COUNT(pe.project_id) as active_projects,
      SUM(pe.salary_allocation) as total_salary_allocation
    FROM employees e
    LEFT JOIN project_employees pe ON e.id = pe.employee_id
    LEFT JOIN projects p ON pe.project_id = p.id AND p.status = 'in_progress'
    GROUP BY e.id
  `;
  try {
    const [results] = await connection.query(sql);
    return results;
  } catch (error) {
    console.error('Error in getEmployeeWorkloadReport:', error);
    throw error;
  }
};

const getInventoryValueReport = async () => {
  const sql = `
    SELECT 
      SUM(i.quantity * m.unit_price) as total_inventory_value,
      COUNT(DISTINCT i.material_id) as unique_materials,
      COUNT(DISTINCT i.rack_id) as racks_used
    FROM inventory i
    JOIN materials m ON i.material_id = m.id
  `;
  try {
    const [[results]] = await connection.query(sql);
    return results;
  } catch (error) {
    console.error('Error in getInventoryValueReport:', error);
    throw error;
  }
};
const totalProjects = async () => {
  const sql = "SELECT COUNT(*) as total_projects FROM projects";
  try {
    const [[result]] = await connection.query(sql);
    return result.total_projects;
  } catch (error) {
    console.error('Error in totalProjects:', error);
    throw error;
  }
};

const totalEmployees = async () => {
  const sql = "SELECT COUNT(*) as total_employees FROM employees";
  try {
    const [[result]] = await connection.query(sql);
    return result.total_employees;
  } catch (error) {
    console.error('Error in totalEmployees:', error);
    throw error;
  }
};

const totalSupliers = async () => {
  const sql = "SELECT COUNT(*) as total_suppliers FROM suppliers";
  try {
    const [[result]] = await connection.query(sql);
    return result.total_suppliers;
  } catch (error) {
    console.error('Error in totalSuppliers:', error);
    throw error;
  }
};

const totalClients = async () => {
  const sql = "SELECT COUNT(*) as total_clients FROM clients";
  try {
    const [[result]] = await connection.query(sql);
    return result.total_clients;
  } catch (error) {
    console.error('Error in totalClients:', error);
    throw error;
  }
};


module.exports = {
  getProjectCostReport,
  getEmployeeWorkloadReport,
  getInventoryValueReport,
  totalProjects,
  totalEmployees,
  totalSupliers,
  totalClients
};
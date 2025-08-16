const connection = require("../../config/DBconnect");

const getProjectCostReport = async (projectId) => {
  // Get material costs
  const materialCostSql = `
    SELECT SUM(pm.quantity * m.unit_price) as total_material_cost
    FROM project_materials pm
    JOIN materials m ON pm.material_id = m.id
    WHERE pm.project_id = ?
  `;
  
  // Get labor costs
  const laborCostSql = `
    SELECT SUM(pe.salary_allocation) as total_labor_cost
    FROM project_employees pe
    WHERE pe.project_id = ?
  `;
  
  // Get project details
  const projectSql = "SELECT budget FROM projects WHERE id = ?";
  
  return new Promise((resolve, reject) => {
    connection.query(materialCostSql, [projectId], (error, materialResults) => {
      if (error) return reject(error);
      
      connection.query(laborCostSql, [projectId], (error, laborResults) => {
        if (error) return reject(error);
        
        connection.query(projectSql, [projectId], (error, projectResults) => {
          if (error) return reject(error);
          
          const report = {
            project_id: projectId,
            budget: projectResults[0].budget,
            material_cost: materialResults[0].total_material_cost || 0,
            labor_cost: laborResults[0].total_labor_cost || 0,
            total_cost: (materialResults[0].total_material_cost || 0) + 
                       (laborResults[0].total_labor_cost || 0)
          };
          
          resolve(report);
        });
      });
    });
  });
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
  
  return new Promise((resolve, reject) => {
    connection.query(sql, (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
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
  
  return new Promise((resolve, reject) => {
    connection.query(sql, (error, results) => {
      if (error) return reject(error);
      resolve(results[0]);
    });
  });
};

module.exports = {
  getProjectCostReport,
  getEmployeeWorkloadReport,
  getInventoryValueReport
};
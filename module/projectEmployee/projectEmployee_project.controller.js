// controllers/projectEmployee.controller.js
const projectEmployeeService = require("./projectEmployee_project.service");

const assignEmployeeToProject = async (req, res) => {
  try {
    const { project_id, employee_id, role, start_date, end_date, salary_allocation } = req.body;
    if (!project_id || !employee_id) {
      return res.status(400).json({ error: "Project ID and employee ID are required." });
    }

    const data = { project_id, employee_id, role, start_date, end_date, salary_allocation };

    // Insert assignment
    const result = await projectEmployeeService.assignEmployeeToProject(data);

    // Fetch the full joined employee record for the inserted row
    const fullAssignment = await projectEmployeeService.getEmployeeAssignmentById(result.insertId);

    res.status(201).json({ message: "Employee assigned to project successfully", assignment: fullAssignment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProjectEmployees = async(req, res)=>{
  const { projectId } = req.params;
  try {
    const employees = await projectEmployeeService.getProjectEmployees(Number(projectId));
    res.json({ employees }); // ✅ matches frontend
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching employees" });
  }
}


const updateEmployeeAssignment = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (!id) {
      return res.status(400).json({ error: "Assignment ID is required." });
    }
    const result = await projectEmployeeService.updateEmployeeProjectAssignment(id, data);
    res.status(200).json({ message: "Employee assignment updated successfully", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const removeEmployeeFromProject = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Assignment ID is required." });
    }
    const result = await projectEmployeeService.removeEmployeeFromProject(id);
    res.status(200).json({ message: "Employee removed from project successfully", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEmployeeAssignmentById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Assignment ID is required." });
    }
    const assignment = await projectEmployeeService.getEmployeeAssignmentById(id);
    if (!assignment) {
      return res.status(404).json({ error: "Assignment not found." });
    }
    res.status(200).json({ assignment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllAssignedEmployees = async (req, res) => {
  try {
    const employees = await projectEmployeeService.getAllAssignedEmployees();
    res.status(200).json({ employees });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  assignEmployeeToProject,
  getProjectEmployees,
  updateEmployeeAssignment,
  removeEmployeeFromProject,
  getEmployeeAssignmentById,
  getAllAssignedEmployees
};

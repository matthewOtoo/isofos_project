const employeeService = require("./employee.service");
const projectEmployeeService = require("../projectEmployee/projectEmployee_project.service");
const getAllEmployees = async (req, res) => {
  try {
    const employees = await employeeService.getAllEmployees();
    res.status(200).json({ employees });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const registerEmployee = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      phone,
      address,
      position,
      base_salary,
      hire_date,
      project_id,
    } = req.body;
    if (
      !address ||
      !position ||
      !base_salary ||
      !hire_date ||
      !project_id ||
      !phone ||
      !email ||
      !last_name ||
      !first_name
    ) {
      return res.status(400).json({ error: "All fields are required." });
    }
    const data = {
      first_name,
      last_name,
      email,
      phone,
      address,
      position,
      base_salary,
      hire_date,
    };
    const result = await employeeService.createEmployee(data);
    const employee = await employeeService.getAllEmployees();
    const matchedEmployee = employee.find((emp) => emp.email === data.email);
    if (!matchedEmployee) {
      throw new Error("Employee not found after registration");
    }
    const employeeId = matchedEmployee.id;
    const assignData = {
      project_id,
      employee_id: employeeId,
      role: position,
      start_date: hire_date,
      end_date: new Date(),
      salary_allocation: base_salary,
    };

    const details = await projectEmployeeService.assignEmployeeToProject(
      assignData
    );
    if (!details) {
      throw new Error("Failed to assign to a new project");
    }
    res
      .status(201)
      .json({ message: "Employee registered successfully", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllEmployees,
  registerEmployee,
};

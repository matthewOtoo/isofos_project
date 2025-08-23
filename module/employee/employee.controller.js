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

    // ✅ Only required fields
    if (!first_name || !last_name || !email || !position || !base_salary) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    const data = {
      first_name,
      last_name,
      email,
      phone: phone || null,
      address: address || null,
      position,
      base_salary,
      hire_date: hire_date || null,
    };

    // Create employee
    const result = await employeeService.createEmployee(data);

    // If project assignment provided, assign employee
    if (project_id) {
      const employee = await employeeService.getAllEmployees();
      const matchedEmployee = employee.find((emp) => emp.email === data.email);

      if (!matchedEmployee) {
        throw new Error("Employee not found after registration");
      }

      const assignData = {
        project_id,
        employee_id: matchedEmployee.id,
        role: position,
        start_date: hire_date || new Date(),
        salary_allocation: base_salary,
      };

      await projectEmployeeService.assignEmployeeToProject(assignData);
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

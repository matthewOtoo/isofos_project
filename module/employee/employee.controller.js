const employeeService = require("./employee.service");

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
    const { em_id, em_name, em_roll, em_salary, mng_id } = req.body;
    if (!em_id || !em_name || !em_roll || !em_salary || !mng_id) {
      return res.status(400).json({ error: "All fields are required." });
    }
    const data = { em_id, em_name, em_roll, em_salary, mng_id };
    // Validate the manager ID
    const manager = await employeeService.getManagerById(mng_id);
    if (!manager) {
      return res.status(404).json({ error: "Manager not found." });
    }
    const result = await employeeService.registerEmployee(data);
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

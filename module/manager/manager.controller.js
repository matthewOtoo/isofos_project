const managerService = require("./manager.service");

const getManagers = async (req, res) => {
  try {
    const managers = await managerService.getAllManagers();
    res.status(200).json({ managers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const registerManager = async (req, res) => {
  try {
    const { first_name, last_name, email, password, phone } = req.body;
    if (!first_name || !last_name || !email || !password) {
      return res.status(400).json({ error: "All required fields must be provided." });
    }
    const data = { first_name, last_name, email, password, phone };
    const result = await managerService.registerManager(data);
    res.status(201).json({ message: "Manager registered successfully", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const loginManager = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required." });
    }
    const manager = await managerService.loginManager(email, password);
    if (!manager) {
      return res.status(401).json({ error: "Invalid email or password." });
    }
    res.status(200).json({ message: "Login successful", manager });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getManagerById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Manager ID is required." });
    }
    const manager = await managerService.getManagerById(id);
    if (!manager) {
      return res.status(404).json({ error: "Manager not found." });
    }
    res.status(200).json({ manager });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getManagers,
  registerManager,
  getManagerById,
  loginManager
};
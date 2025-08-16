const projectTypeService = require("./project_type.service");

const getProjectTypes = async (req, res) => {
  try {
    const projectTypes = await projectTypeService.getAllProjectTypes();
    res.status(200).json({ projectTypes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProjectType = async (req, res) => {
  try {
    const { type_name, description } = req.body;
    if (!type_name) {
      return res.status(400).json({ error: "Type name is required." });
    }
    const data = { type_name, description };
    const result = await projectTypeService.createProjectType(data);
    res.status(201).json({ message: "Project type created successfully", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProjectTypeById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Project type ID is required." });
    }
    const projectType = await projectTypeService.getProjectTypeById(id);
    if (!projectType) {
      return res.status(404).json({ error: "Project type not found." });
    }
    res.status(200).json({ projectType });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getProjectTypes,
  createProjectType,
  getProjectTypeById
};
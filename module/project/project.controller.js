const projectService = require("./project.service");

const getProjects = async (req, res) => {
  try {
    const projects = await projectService.getAllProjects();
    res.status(200).json({ projects });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProject = async (req, res) => {
  try {
    const { client_id, project_type_id, name, description, start_date, end_date, budget } = req.body;
    if (!client_id || !project_type_id || !name) {
      return res.status(400).json({ error: "Client ID, project type ID and name are required." });
    }
    const data = { client_id, project_type_id, name, description, start_date, end_date, budget };
    const result = await projectService.createProject(data);
    res.status(201).json({ message: "Project created successfully", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Project ID is required." });
    }
    const project = await projectService.getProjectById(id);
    if (!project) {
      return res.status(404).json({ error: "Project not found." });
    }
    res.status(200).json({ project });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (!id) {
      return res.status(400).json({ error: "Project ID is required." });
    }
    const result = await projectService.updateProject(id, data);
    res.status(200).json({ message: "Project updated successfully", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Project ID is required." });
    }
    const result = await projectService.deleteProject(id);
    res.status(200).json({ message: "Project deleted successfully", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProjectsByStatus = async (req, res) => {
  try {
    const { status } = req.params;
    if (!status) {
      return res.status(400).json({ error: "Status is required." });
    }
    const projects = await projectService.getProjectsByStatus(status);
    res.status(200).json({ projects });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getProjects,
  createProject,
  getProjectById,
  updateProject,
  deleteProject,
  getProjectsByStatus
};
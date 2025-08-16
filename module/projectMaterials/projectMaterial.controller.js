const projectMaterialService = require("./projectMaterials.service");

const allocateMaterialToProject = async (req, res) => {
  try {
    const { project_id, material_id, quantity, allocated_date } = req.body;
    if (!project_id || !material_id || !quantity) {
      return res.status(400).json({ error: "Project ID, material ID and quantity are required." });
    }
    const data = { project_id, material_id, quantity, allocated_date };
    const result = await projectMaterialService.allocateMaterialToProject(data);
    res.status(201).json({ message: "Material allocated to project successfully", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProjectMaterials = async (req, res) => {
  try {
    const { projectId } = req.params;
    if (!projectId) {
      return res.status(400).json({ error: "Project ID is required." });
    }
    const materials = await projectMaterialService.getProjectMaterials(projectId);
    res.status(200).json({ materials });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateMaterialAllocation = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (!id) {
      return res.status(400).json({ error: "Allocation ID is required." });
    }
    const result = await projectMaterialService.updateProjectMaterialAllocation(id, data);
    res.status(200).json({ message: "Material allocation updated successfully", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const removeMaterialFromProject = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Allocation ID is required." });
    }
    const result = await projectMaterialService.removeMaterialFromProject(id);
    res.status(200).json({ message: "Material removed from project successfully", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMaterialAllocationById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Allocation ID is required." });
    }
    const allocation = await projectMaterialService.getMaterialAllocationById(id);
    if (!allocation) {
      return res.status(404).json({ error: "Allocation not found." });
    }
    res.status(200).json({ allocation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  allocateMaterialToProject,
  getProjectMaterials,
  updateMaterialAllocation,
  removeMaterialFromProject,
  getMaterialAllocationById
};
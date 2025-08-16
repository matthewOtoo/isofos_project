const materialService = require("./material.service");

const getMaterials = async (req, res) => {
  try {
    const materials = await materialService.getAllMaterials();
    res.status(200).json({ materials });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createMaterial = async (req, res) => {
  try {
    const { supplier_id, name, description, unit_price, unit_of_measure } = req.body;
    if (!supplier_id || !name || !unit_price) {
      return res.status(400).json({ error: "Supplier ID, name and unit price are required." });
    }
    const data = { supplier_id, name, description, unit_price, unit_of_measure };
    const result = await materialService.createMaterial(data);
    res.status(201).json({ message: "Material created successfully", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMaterialById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Material ID is required." });
    }
    const material = await materialService.getMaterialById(id);
    if (!material) {
      return res.status(404).json({ error: "Material not found." });
    }
    res.status(200).json({ material });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateMaterial = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (!id) {
      return res.status(400).json({ error: "Material ID is required." });
    }
    const result = await materialService.updateMaterial(id, data);
    res.status(200).json({ message: "Material updated successfully", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteMaterial = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Material ID is required." });
    }
    const result = await materialService.deleteMaterial(id);
    res.status(200).json({ message: "Material deleted successfully", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getMaterials,
  createMaterial,
  getMaterialById,
  updateMaterial,
  deleteMaterial
};
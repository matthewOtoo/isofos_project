const warehouseRackService = require("./warehouse.service");

const getRacks = async (req, res) => {
  try {
    const racks = await warehouseRackService.getAllRacks();
    res.status(200).json({ racks });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createRack = async (req, res) => {
  try {
    const { name, location, capacity } = req.body;
    if (!name || !location) {
      return res.status(400).json({ error: "Name and location are required." });
    }
    const data = { name, location, capacity };
    const result = await warehouseRackService.createRack(data);
    res.status(201).json({ message: "Rack created successfully", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRackById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Rack ID is required." });
    }
    const rack = await warehouseRackService.getRackById(id);
    if (!rack) {
      return res.status(404).json({ error: "Rack not found." });
    }
    res.status(200).json({ rack });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateRack = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (!id) {
      return res.status(400).json({ error: "Rack ID is required." });
    }
    const result = await warehouseRackService.updateRack(id, data);
    res.status(200).json({ message: "Rack updated successfully", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteRack = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Rack ID is required." });
    }
    const result = await warehouseRackService.deleteRack(id);
    res.status(200).json({ message: "Rack deleted successfully", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getRacks,
  createRack,
  getRackById,
  updateRack,
  deleteRack
};
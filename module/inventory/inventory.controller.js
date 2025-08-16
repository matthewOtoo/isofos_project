const inventoryService = require("./inventory.service");

const getInventory = async (req, res) => {
  try {
    const inventory = await inventoryService.getInventory();
    res.status(200).json({ inventory });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addToInventory = async (req, res) => {
  try {
    const { material_id, rack_id, quantity, last_restocked } = req.body;
    if (!material_id || !rack_id || !quantity) {
      return res.status(400).json({ error: "Material ID, rack ID and quantity are required." });
    }
    const data = { material_id, rack_id, quantity, last_restocked };
    const result = await inventoryService.addToInventory(data);
    res.status(201).json({ message: "Item added to inventory successfully", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getInventoryItemById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Inventory item ID is required." });
    }
    const item = await inventoryService.getInventoryItemById(id);
    if (!item) {
      return res.status(404).json({ error: "Inventory item not found." });
    }
    res.status(200).json({ item });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateInventoryItem = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (!id) {
      return res.status(400).json({ error: "Inventory item ID is required." });
    }
    const result = await inventoryService.updateInventoryItem(id, data);
    res.status(200).json({ message: "Inventory item updated successfully", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteInventoryItem = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Inventory item ID is required." });
    }
    const result = await inventoryService.deleteInventoryItem(id);
    res.status(200).json({ message: "Inventory item deleted successfully", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getInventoryByMaterialId = async (req, res) => {
  try {
    const { materialId } = req.params;
    if (!materialId) {
      return res.status(400).json({ error: "Material ID is required." });
    }
    const inventory = await inventoryService.getInventoryByMaterialId(materialId);
    res.status(200).json({ inventory });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getInventoryByRackId = async (req, res) => {
  try {
    const { rackId } = req.params;
    if (!rackId) {
      return res.status(400).json({ error: "Rack ID is required." });
    }
    const inventory = await inventoryService.getInventoryByRackId(rackId);
    res.status(200).json({ inventory });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getInventory,
  addToInventory,
  getInventoryItemById,
  updateInventoryItem,
  deleteInventoryItem,
  getInventoryByMaterialId,
  getInventoryByRackId
};
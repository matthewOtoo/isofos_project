const supplierService = require("./supplier.service");

const getSuppliers = async (req, res) => {
  try {
    const suppliers = await supplierService.getAllSuppliers();
    res.status(200).json({ suppliers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createSupplier = async (req, res) => {
  try {
    const { name, email, phone, address } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required." });
    }
    const data = { name, email, phone, address };
    const result = await supplierService.createSupplier(data);
    res.status(201).json({ message: "Supplier created successfully", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSupplierById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Supplier ID is required." });
    }
    const supplier = await supplierService.getSupplierById(id);
    if (!supplier) {
      return res.status(404).json({ error: "Supplier not found." });
    }
    res.status(200).json({ supplier });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateSupplier = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (!id) {
      return res.status(400).json({ error: "Supplier ID is required." });
    }
    const result = await supplierService.updateSupplier(id, data);
    res.status(200).json({ message: "Supplier updated successfully", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteSupplier = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Supplier ID is required." });
    }
    const result = await supplierService.deleteSupplier(id);
    res.status(200).json({ message: "Supplier deleted successfully", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getSuppliers,
  createSupplier,
  getSupplierById,
  updateSupplier,
  deleteSupplier
};
const express = require("express");
const supplierService = require("./supplier.service");

const getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await supplierService.getAllSuppliers();
    res.status(200).json({ suppliers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const registerSupplier = async (req, res) => {
  try {
    const { sup_id, sup_name, sup_email, sup_contact, mat_id } = req.body;

    if (!sup_id || !sup_name || !sup_contact) {
      return res
        .status(400)
        .json({ error: "Supplier ID, name, and contact are required." });
    }

    // Validate material ID if provided
    if (mat_id) {
      const material = await supplierService.getMaterialById(mat_id);
      if (!material) {
        return res.status(404).json({ error: "Material not found." });
      }
    }

    const data = { sup_id, sup_name, sup_email, sup_contact, mat_id };
    const result = await supplierService.registerSupplier(data);

    res
      .status(201)
      .json({ message: "Supplier registered successfully", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllSuppliers,
  registerSupplier,
};

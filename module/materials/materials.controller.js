const express = require("express");
const materialsService = require("./materials.service");

const getAllMaterials = async (req, res) => {
  try {
    const materials = await materialsService.getAllMaterials();
    res.status(200).json({ materials });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const registerMaterial = async (req, res) => {
  try {
    const { mat_id, mat_name, mat_type, mat_price } = req.body;

    if (!mat_id || !mat_name || !mat_type || !mat_price) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const data = { mat_id, mat_name, mat_type, mat_price };
    const result = await materialsService.registerMaterial(data);

    res
      .status(201)
      .json({ message: "Material registered successfully", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllMaterials,
  registerMaterial,
};

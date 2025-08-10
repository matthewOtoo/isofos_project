const express = require("express");
const materialsRouter = express.Router();
const materials = require("./materials.controller");

materialsRouter.get("/", materials.getAllMaterials);
materialsRouter.post("/", materials.registerMaterial);
materialsRouter.get("/:id", materials.getMaterialById); // Assuming you'll add this method

module.exports = materialsRouter;

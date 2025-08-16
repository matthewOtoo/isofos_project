const express = require("express");
const materialRouter = express.Router();
const materialController = require("./material.controller");

materialRouter.get("/", materialController.getMaterials);
materialRouter.post("/", materialController.createMaterial);
materialRouter.get("/:id", materialController.getMaterialById);
materialRouter.put("/:id", materialController.updateMaterial);
materialRouter.delete("/:id", materialController.deleteMaterial);

module.exports = materialRouter;
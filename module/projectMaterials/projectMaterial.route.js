const express = require("express");
const projectMaterialRouter = express.Router();
const projectMaterialController = require("./projectMaterial.controller");

projectMaterialRouter.post("/", projectMaterialController.allocateMaterialToProject);
projectMaterialRouter.get("/project/:projectId", projectMaterialController.getProjectMaterials);
projectMaterialRouter.put("/:id", projectMaterialController.updateMaterialAllocation);
projectMaterialRouter.delete("/:id", projectMaterialController.removeMaterialFromProject);
projectMaterialRouter.get("/:id", projectMaterialController.getMaterialAllocationById);

module.exports = projectMaterialRouter;
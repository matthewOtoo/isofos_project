const express = require("express");
const projectTypeRouter = express.Router();
const projectTypeController = require("./project_type.controller");

projectTypeRouter.get("/", projectTypeController.getProjectTypes);
projectTypeRouter.post("/", projectTypeController.createProjectType);
projectTypeRouter.get("/:id", projectTypeController.getProjectTypeById);

module.exports = projectTypeRouter;
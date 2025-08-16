const express = require("express");
const projectRouter = express.Router();
const projectController = require("./project.controller");

projectRouter.get("/", projectController.getProjects);
projectRouter.post("/", projectController.createProject);
projectRouter.get("/:id", projectController.getProjectById);
projectRouter.put("/:id", projectController.updateProject);
projectRouter.delete("/:id", projectController.deleteProject);
projectRouter.get("/status/:status", projectController.getProjectsByStatus);

module.exports = projectRouter;
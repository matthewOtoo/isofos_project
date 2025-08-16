const express = require("express");
const projectEmployeeRouter = express.Router();
const projectEmployeeController = require("./projectEmployee_project.controller");

projectEmployeeRouter.post("/", projectEmployeeController.assignEmployeeToProject);
projectEmployeeRouter.get("/project/:projectId", projectEmployeeController.getProjectEmployees);
projectEmployeeRouter.put("/:id", projectEmployeeController.updateEmployeeAssignment);
projectEmployeeRouter.delete("/:id", projectEmployeeController.removeEmployeeFromProject);
projectEmployeeRouter.get("/:id", projectEmployeeController.getEmployeeAssignmentById);

module.exports = projectEmployeeRouter;
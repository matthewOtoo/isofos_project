const express = require("express");
const employeeProjectRouter = express.Router();
const employeeProject = require("./employeeProject.controller");

employeeProjectRouter.get("/", employeeProject.getEmployeeProjects);
employeeProjectRouter.get(
  "/employee/:em_id",
  employeeProject.getProjectsByEmployee
);
employeeProjectRouter.get(
  "/project/:pro_id",
  employeeProject.getEmployeesByProject
);

module.exports = employeeProjectRouter;

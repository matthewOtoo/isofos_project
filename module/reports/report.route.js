const express = require("express");
const reportRouter = express.Router();
const reportController = require("./reports.controller");

reportRouter.get("/project-cost/:projectId", reportController.getProjectCostReport);
reportRouter.get("/employee-workload", reportController.getEmployeeWorkloadReport);
reportRouter.get("/inventory-value", reportController.getInventoryValueReport);
reportRouter.get("/total-projects", reportController.totalProjects);
reportRouter.get("/total-employees", reportController.totalEmployees);
reportRouter.get("/total-suppliers", reportController.totalSuppliers);
reportRouter.get("/total-clients", reportController.totalClients);

module.exports = reportRouter;
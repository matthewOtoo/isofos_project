const express = require("express");
const reportRouter = express.Router();
const reportController = require("./reports.controller");

reportRouter.get("/project-cost/:projectId", reportController.getProjectCostReport);
reportRouter.get("/employee-workload", reportController.getEmployeeWorkloadReport);
reportRouter.get("/inventory-value", reportController.getInventoryValueReport);

module.exports = reportRouter;
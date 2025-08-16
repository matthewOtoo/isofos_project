const express = require("express");
const router = express.Router();

// Import all route files
const managerRouter = require("./manager/manager.route");
const clientRouter = require("./clients/client.route");
const projectTypeRouter = require("./projectType/projectType.route");
const projectRouter = require("./project/project.route");
const supplierRouter = require("./supplier/supplier.route");
const materialRouter = require("./materials/material.route");
const warehouseRouter = require("./warehouse/warehouse.route");
const inventoryRouter = require("./inventory/inventory.route");
const employeeRouter = require("./employee/employee.route");
const projectMaterialRouter = require("./projectMaterials/projectMaterial.route");
const projectEmployeeRouter = require("./projectEmployee/projectEmployee.route");
const reportRouter = require("./reports/report.route");

// Define base paths for each route
router.use("/managers", managerRouter);
router.use("/clients", clientRouter);
router.use("/project-types", projectTypeRouter);
router.use("/projects", projectRouter);
router.use("/suppliers", supplierRouter);
router.use("/materials", materialRouter);
router.use("/warehouses", warehouseRouter);
router.use("/inventory", inventoryRouter);
router.use("/employees", employeeRouter);
router.use("/project-materials", projectMaterialRouter);
router.use("/project-employees", projectEmployeeRouter);
router.use("/reports", reportRouter);

module.exports = router;
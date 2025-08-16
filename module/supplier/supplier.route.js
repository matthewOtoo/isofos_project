const express = require("express");
const supplierRouter = express.Router();
const supplierController = require("./supplier.controller");

supplierRouter.get("/", supplierController.getSuppliers);
supplierRouter.post("/", supplierController.createSupplier);
supplierRouter.get("/:id", supplierController.getSupplierById);
supplierRouter.put("/:id", supplierController.updateSupplier);
supplierRouter.delete("/:id", supplierController.deleteSupplier);

module.exports = supplierRouter;
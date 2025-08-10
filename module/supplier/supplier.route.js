const express = require("express");
const supplierRouter = express.Router();
const supplier = require("./supplier.controller");

supplierRouter.get("/", supplier.getAllSuppliers);
supplierRouter.post("/", supplier.registerSupplier);
supplierRouter.get("/:id", supplier.getSupplierById); // Assuming you'll add this method

module.exports = supplierRouter;

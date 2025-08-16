const express = require("express");
const warehouseRackRouter = express.Router();
const warehouseRackController = require("./warehouse.controller");

warehouseRackRouter.get("/", warehouseRackController.getRacks);
warehouseRackRouter.post("/", warehouseRackController.createRack);
warehouseRackRouter.get("/:id", warehouseRackController.getRackById);
warehouseRackRouter.put("/:id", warehouseRackController.updateRack);
warehouseRackRouter.delete("/:id", warehouseRackController.deleteRack);

module.exports = warehouseRackRouter;
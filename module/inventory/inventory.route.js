const express = require("express");
const inventoryRouter = express.Router();
const inventoryController = require("./inventory.controller");

inventoryRouter.get("/", inventoryController.getInventory);
inventoryRouter.post("/", inventoryController.addToInventory);
inventoryRouter.get("/:id", inventoryController.getInventoryItemById);
inventoryRouter.put("/:id", inventoryController.updateInventoryItem);
inventoryRouter.delete("/:id", inventoryController.deleteInventoryItem);
inventoryRouter.get("/material/:materialId", inventoryController.getInventoryByMaterialId);
inventoryRouter.get("/rack/:rackId", inventoryController.getInventoryByRackId);

module.exports = inventoryRouter;
const connection = require("../../config/DBconnect");

const addToInventory = async (data) => {
  const sql = "INSERT INTO inventory SET ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, data, (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const getInventory = async () => {
  const sql = `
    SELECT i.*, m.name as material_name, m.unit_of_measure, 
           m.unit_price, s.name as supplier_name, 
           wr.name as rack_name, wr.location
    FROM inventory i
    JOIN materials m ON i.material_id = m.id
    JOIN suppliers s ON m.supplier_id = s.id
    JOIN warehouse_racks wr ON i.rack_id = wr.id
  `;
  return new Promise((resolve, reject) => {
    connection.query(sql, (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const getInventoryItemById = async (id) => {
  const sql = `
    SELECT i.*, m.name as material_name, m.unit_of_measure, 
           m.unit_price, s.name as supplier_name, 
           wr.name as rack_name, wr.location
    FROM inventory i
    JOIN materials m ON i.material_id = m.id
    JOIN suppliers s ON m.supplier_id = s.id
    JOIN warehouse_racks wr ON i.rack_id = wr.id
    WHERE i.id = ?
  `;
  return new Promise((resolve, reject) => {
    connection.query(sql, [id], (error, results) => {
      if (error) return reject(error);
      resolve(results[0]);
    });
  });
};

const updateInventoryItem = async (id, data) => {
  const sql = "UPDATE inventory SET ? WHERE id = ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, [data, id], (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const deleteInventoryItem = async (id) => {
  const sql = "DELETE FROM inventory WHERE id = ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, [id], (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const getInventoryByMaterialId = async (materialId) => {
  const sql = "SELECT * FROM inventory WHERE material_id = ?";
  return new Promise((resolve, reject) => {
    connection.query(sql, [materialId], (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const getInventoryByRackId = async (rackId) => {
  const sql = `
    SELECT i.*, m.name as material_name, m.unit_of_measure
    FROM inventory i
    JOIN materials m ON i.material_id = m.id
    WHERE i.rack_id = ?
  `;
  return new Promise((resolve, reject) => {
    connection.query(sql, [rackId], (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

module.exports = {
  addToInventory,
  getInventory,
  getInventoryItemById,
  updateInventoryItem,
  deleteInventoryItem,
  getInventoryByMaterialId,
  getInventoryByRackId
};
const connection = require("../../config/DBconnect");

const addToInventory = async (data) => {
  const sql = "INSERT INTO inventory SET ?";
  try {
    const [results] = await connection.query(sql, data);
    return results;
  } catch (error) {
    console.error('Error in addToInventory:', error);
    throw error;
  }
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
  try {
    const [results] = await connection.query(sql);
    return results;
  } catch (error) {
    console.error('Error in getInventory:', error);
    throw error;
  }
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
  try {
    const [results] = await connection.query(sql, [id]);
    return results[0] || null;
  } catch (error) {
    console.error('Error in getInventoryItemById:', error);
    throw error;
  }
};

const updateInventoryItem = async (id, data) => {
  const sql = "UPDATE inventory SET ? WHERE id = ?";
  try {
    const [results] = await connection.query(sql, [data, id]);
    return results;
  } catch (error) {
    console.error('Error in updateInventoryItem:', error);
    throw error;
  }
};

const deleteInventoryItem = async (id) => {
  const sql = "DELETE FROM inventory WHERE id = ?";
  try {
    const [results] = await connection.query(sql, [id]);
    return results;
  } catch (error) {
    console.error('Error in deleteInventoryItem:', error);
    throw error;
  }
};

const getInventoryByMaterialId = async (materialId) => {
  const sql = "SELECT * FROM inventory WHERE material_id = ?";
  try {
    const [results] = await connection.query(sql, [materialId]);
    return results;
  } catch (error) {
    console.error('Error in getInventoryByMaterialId:', error);
    throw error;
  }
};

const getInventoryByRackId = async (rackId) => {
  const sql = `
    SELECT i.*, m.name as material_name, m.unit_of_measure
    FROM inventory i
    JOIN materials m ON i.material_id = m.id
    WHERE i.rack_id = ?
  `;
  try {
    const [results] = await connection.query(sql, [rackId]);
    return results;
  } catch (error) {
    console.error('Error in getInventoryByRackId:', error);
    throw error;
  }
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
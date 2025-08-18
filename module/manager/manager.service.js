const connection = require("../../config/DBconnect");
const bcrypt = require("bcryptjs");

const registerManager = async (data) => {
  const sql = "INSERT INTO managers SET ?";
  try {
    // Hash the password before storing it
    if (data.password) {
      const salt = await bcrypt.genSalt(10);
      data.password = await bcrypt.hash(data.password, salt);
    }
    // Check if the email already exists
    const existingManager = await getManagerByEmail(data.email);
    if (existingManager) {
      throw new Error('Manager with this email already exists');
    }
    // Insert the manager data into the database
    const [results] = await connection.query(sql, data);
    return results;
  } catch (error) {
    console.error('Error in registerManager:', error);
    throw error;
  }
};

const loginManager = async (email, password) => {
  const sql = "SELECT * FROM managers WHERE email = ? AND password = ?";
  try {
    const [results] = await connection.query(sql, [email, password]);
    if (results.length === 0) {
      throw new Error('Invalid email or password');
    }
    return results[0] || null;
  } catch (error) {
    console.error('Error in loginManager:', error);
    throw error;
  }
}

const getAllManagers = async () => {
  const sql = "SELECT * FROM managers";
  try {
    const [results] = await connection.query(sql);
    return results;
  } catch (error) {
    console.error('Error in getAllManagers:', error);
    throw error;
  }
};

const getManagerById = async (id) => {
  const sql = "SELECT * FROM managers WHERE id = ?";
  try {
    const [results] = await connection.query(sql, [id]);
    return results[0] || null;
  } catch (error) {
    console.error('Error in getManagerById:', error);
    throw error;
  }
};

const getManagerByEmail = async (email) => {
  const sql = "SELECT * FROM managers WHERE email = ?";
  try {
    const [results] = await connection.query(sql, [email]);
    return results[0] || null;
  } catch (error) {
    console.error('Error in getManagerByEmail:', error);
    throw error;
  }
};

const deleteManagerById = async (id) => {
  const sql = "DELETE FROM managers WHERE id = ?";
  try {
    const [results] = await connection.query(sql, [id]);
    return results.affectedRows > 0;
  } catch (error) {
    console.error('Error in deleteManagerById:', error);
    throw error;
  }
};

module.exports = {
  registerManager,
  getAllManagers,
  getManagerById,
  deleteManagerById,
  getManagerByEmail,
  loginManager
};
const mysql = require("mysql2/promise"); // Using promise version for better async handling
const fs = require("fs");
const path = require("path");
require("dotenv").config(); // Ensure environment variables are loaded

// Database configuration
const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "", // Never hardcode passwords
  database: process.env.DB_NAME || "isofos_project",
  multipleStatements: true // For running multiple SQL commands
};

// Create connection pool for better performance
const pool = mysql.createPool(dbConfig);

// Initialize database
async function initializeDatabase() {
  let conn;
  try {
    // First try to connect to the specific database
    conn = await pool.getConnection();
    await conn.query("SELECT 1");
    console.log(`Connected to database '${dbConfig.database}' successfully.`);
    await runMigrations(conn);
  } catch (err) {
    if (err.code === 'ER_BAD_DB_ERROR') {
      // Database doesn't exist, create it
      console.log(`Database '${dbConfig.database}' doesn't exist. Creating...`);
      
      // Create temp connection without specifying database
      const tempConn = await mysql.createConnection({
        host: dbConfig.host,
        user: dbConfig.user,
        password: dbConfig.password
      });
      
      try {
        await tempConn.query(`CREATE DATABASE IF NOT EXISTS ${dbConfig.database}`);
        console.log(`Database '${dbConfig.database}' created successfully.`);
        
        // Now connect to the new database
        conn = await pool.getConnection();
        await runMigrations(conn);
      } finally {
        if (tempConn) await tempConn.end();
      }
    } else {
      console.error("Database connection error:", err);
      process.exit(1);
    }
  } finally {
    if (conn) conn.release();
  }
}

// Run migrations
async function runMigrations(connection) {
  try {
    // Create migrations table if not exists
    await connection.query(`
      CREATE TABLE IF NOT EXISTS migrations (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Check if initial migration exists
    const [rows] = await connection.query(
      "SELECT * FROM migrations WHERE name = 'initial_schema'"
    );

    if (rows.length === 0) {
      console.log("Running initial schema migration...");
      
      const sqlFilePath = path.join(__dirname, "tables.sql");
      const sql = fs.readFileSync(sqlFilePath, "utf8");
      
      await connection.query(sql);
      await connection.query("INSERT INTO migrations (name) VALUES ('initial_schema')");
      
      console.log("Initial schema migration completed successfully.");
    } else {
      console.log("Database schema is up to date.");
    }
  } catch (err) {
    console.error("Migration error:", err);
    process.exit(1);
  }
}

// Initialize and export the pool
initializeDatabase()
  .catch(err => {
    console.error("Initialization failed:", err);
    process.exit(1);
  });

module.exports = pool;
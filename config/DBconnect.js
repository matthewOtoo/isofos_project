const mysql = require("mysql2");
const fs = require("fs");
const path = require("path");

// Create connection to the specific database
const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "@Logicals92",
  database: process.env.DB_NAME || "isofos_project",
});

// Initialize database (check if exists, create if not, run migrations)
initializeDatabase();

// Function to initialize database
function initializeDatabase() {
  // First check if database exists by trying to connect
  connection.query("SELECT 1", (err) => {
    if (err && err.code === 'ER_BAD_DB_ERROR') {
      // Database doesn't exist, need to create it
      console.log(`Database '${process.env.DB_NAME || "isofos_project"}' does not exist. Creating it now...`);
      
      // Create a temporary connection without specifying database
      const tempConnection = mysql.createConnection({
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "@Logicals92"
      });
      
      // Create database
      tempConnection.query(`CREATE DATABASE ${process.env.DB_NAME || "isofos_project"}`, (err) => {
        if (err) {
          console.error("Error creating database:", err);
          tempConnection.end();
          process.exit(1);
        }
        console.log(`Database '${process.env.DB_NAME || "isofos_project"}' created successfully.`);
        tempConnection.end();
        runMigrations();
      });
    } else if (err) {
      // Other connection error
      console.error("Database connection error:", err);
      process.exit(1);
    } else {
      // Database exists and connection is working
      console.log(`Connected to database '${process.env.DB_NAME || "isofos_project"}' successfully.`);
      runMigrations();
    }
  });
}

// Function to run migrations
function runMigrations() {
  // Create migrations table if it doesn't exist
  connection.query(`
    CREATE TABLE IF NOT EXISTS migrations (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `, (err) => {
    if (err) {
      console.error("Error creating migrations table:", err);
      return;
    }

    // Check if our schema migration has been applied
    connection.query("SELECT * FROM migrations WHERE name = 'initial_schema'", (err, results) => {
      if (err) {
        console.error("Error checking migrations:", err);
        return;
      }
      
      // If migration hasn't been applied, run it
      if (results.length === 0) {
        console.log("Running initial schema migration...");
        
        // Read the SQL file
        const sqlFilePath = path.join(__dirname, "tables.sql");
        const sql = fs.readFileSync(sqlFilePath, "utf8");
        
        // Execute the SQL
        connection.query(sql, (err) => {
          if (err) {
            console.error("Error executing schema migration:", err);
            return;
          }
          
          // Record that migration was applied
          connection.query("INSERT INTO migrations (name) VALUES ('initial_schema')", (err) => {
            if (err) {
              console.error("Error recording migration:", err);
              return;
            }
            
            console.log("Initial schema migration completed successfully.");
          });
        });
      } else {
        console.log("Database schema is up to date.");
      }
    });
  });
}

// Export the connection
module.exports = connection;

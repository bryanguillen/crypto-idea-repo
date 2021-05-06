/**
 * @description Entry point for the database module.  It allows
 * for an implementation where all the db interactions go
 * through this file which helps with maintenance; it's the recommended
 * structure by the author of pg.
 */

const { Pool } = require('pg')

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

module.exports = {
  getClient: async () => {
    return await pool.connect();
  },
  query: (text, params) => {
    return pool.query(text, params).catch(error => {
      throw error;
    });
  }
}
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

async function inspectDatabase() {
  try {
    const tables = await pool.query("SELECT tablename FROM pg_tables WHERE schemaname = 'public'");
    console.log('Tables:', tables.rows);

    for (let table of tables.rows) {
      const data = await pool.query(`SELECT * FROM ${table.tablename}`);
      console.log(`\nContents of ${table.tablename}:`, data.rows);
    }
  } catch (error) {
    console.error('Database inspection error:', error);
  } finally {
    await pool.end();
  }
}

inspectDatabase();
import { config } from 'dotenv';
import { createPool } from 'mysql2/promise';
config();

export const pool = createPool({
  host: process.env.HOST,
  user: process.env.USE,
  port: process.env.PORT,
  password: process.env.PASSWORD,
  database: process.env.dbNAME,
  waitForConnections: process.env.WFC,
  connectionLimit: parseInt(process.env.CL),
  queueLimit: parseInt(process.env.QL),
});

const connection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Connected using connection pool!');
    return connection;
  } catch (err) {
    console.error('Connection failed: ', err.message);
    throw err;
  }
};

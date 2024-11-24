import mysql from 'mysql2';

const pool = mysql.createPool({
  host: 'db-jiawei.cluster-c7884y4gw831.us-east-1.rds.amazonaws.com', 
  user: 'admin',      
  password: '1234567890', 
  database: 'group4db', 

  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  // connectTimeout: 10000
});

// Use promise
const db = pool.promise();

export default db;

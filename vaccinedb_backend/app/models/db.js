const mysql = require("mysql");
require("dotenv").config();

// Create a connection to the database
const connection = mysql.createPool({
  connectionLimit: process.env.DB_CONN_LIMIT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connection tester 2
// Uncomment, and run `node db.js` in terminal to test
// connection.query('SELECT * FROM Vaccines', (err,rows) => {
//   if(err) throw err;

//   console.log('Data received from Db:');
//   console.log(rows);

// });

module.exports = connection;

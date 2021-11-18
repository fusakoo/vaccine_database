const mysql = require("mysql");
const dbConfig = require("../config/dbconfig.js");

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

// Connection tester 2
// Uncomment, and run `node db.js` in terminal to test
// connection.query('SELECT * FROM Vaccines', (err,rows) => {
//   if(err) throw err;

//   console.log('Data received from Db:');
//   console.log(rows);

// });

module.exports = connection;

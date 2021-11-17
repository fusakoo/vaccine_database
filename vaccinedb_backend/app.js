// Will work if you run 'node app.js'
var mysql = require('./config/dbconfig.js')
// var bodyParser = require('body-parser');
// var app = express();

// app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static('public'));
// app.set('mysql', mysql);

mysql.pool.query('SELECT * FROM People', (err,rows) => {
  if(err) throw err;

  console.log('Data received from Db:');
  console.log(rows);

});

mysql.pool.query('SELECT * FROM Clinic_Sites', (err,rows) => {
  if(err) throw err;

  console.log('Data received from Db:');
  console.log(rows);

});

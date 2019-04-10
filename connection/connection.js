var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root123',
  database : 'my_db'
});
 
connection.connect((error) => {
    if (error) throw error;
    console.log('connected');
});

module.exports = connection;
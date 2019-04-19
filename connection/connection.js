'use strict';

let mysql = require('mysql');
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root123',
    database : 'my_db'
  });
}


 
connection.connect((error) => {
    if (error) throw error;
    console.log('connected: ' + connection.threadId);
});

module.exports = connection;
'use strict';

let connection = require('./connection');

// connection.query('SELECT * FROM check_list', (error, results) => {
//     if (error) throw error;
//     console.log(results);
// })

let orm = {
    ALL: function(tableName, callBack) {
        let queryCall = (`SELECT * FROM ${tableName};`);
        connection.query(queryCall, (error, results) => {
            if (error) throw error;
            callBack(results);
        });
    },
    CREATE: function(tableName, columnName, value, callBack){
        let queryCall  = (`INSERT INTO ${tableName} (${columnName}) VALUE (${value});`);
        console.log(queryCall);
        connection.query(queryCall, (error, results) => {
            if (error) throw error;
            callBack(results);
        });
    }
}

module.exports = orm;
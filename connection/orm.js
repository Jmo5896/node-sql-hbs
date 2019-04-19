'use strict';

let connection = require('./connection');

// connection.query('SELECT * FROM check_list', (error, results) => {
//     if (error) throw error;
//     console.log(results);
// })

let orm = {
    ALL: function(tableName, callBack) {
        let queryCall = `SELECT * FROM ${tableName};`;
        console.log(queryCall);
        connection.query(queryCall, (error, results) => {
            if (error) throw error;
            callBack(results);
        });
    },
    CREATE: function(tableName, columnName, value, callBack){
        let queryCall  = `INSERT INTO ${tableName} (${columnName}) VALUE ('${value}');`;
        console.log(queryCall);
        connection.query(queryCall, (error, results) => {
            if (error) throw error;
            callBack(results);
        });
    },
    UPDATE: function(tableName, columnName, rowIdentifier, callBack) {
        let queryCall = `UPDATE ${tableName} SET ${columnName} = true WHERE id = ${rowIdentifier};`;
        console.log(queryCall);
        connection.query(queryCall, (error, results) => {
            if (error) throw error;
            callBack(results);
        });
    },
    DELETE: function(tableName, rowIdentifier, callBack) {
        let queryCall = `DELETE FROM ${tableName} WHERE id = ${rowIdentifier};`;
        console.log(queryCall);
        connection.query(queryCall, (error, results) => {
            if (error) throw error;
            callBack(results);
        });
    }
}

module.exports = orm;
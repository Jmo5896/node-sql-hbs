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
        })
    },
    CREATE: function()
}

module.exports = orm;
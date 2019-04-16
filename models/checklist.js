'use strict';

let orm = require('../connection/orm');

let checklist = {
    ALL: function(callBack) {
        orm.ALL('check_list', function(results) {
            callBack(results);
        })
    },
    CREATE: function(value, callBack) {
        orm.CREATE('check_list', 'checklist_item', value, function(results) {
            callBack(results);
        })
    }
};

module.exports = checklist;
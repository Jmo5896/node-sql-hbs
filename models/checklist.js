let orm = require('../connection/orm');

let checklist = {
    ALL: function(callBack) {
        orm.ALL('check_list', function(results) {
            callBack(results);
        })
    }
}

module.exports = checklist;
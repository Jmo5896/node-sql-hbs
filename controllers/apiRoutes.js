'use strict';

let express = require('express');
let router = express.Router();
let checklist_model = require('../models/checklist');

// let connection = require('../connection/connection');



router.get('/', function (req, res) {
    checklist_model.ALL(function(result) {
        console.log(result);
        let handlebarsObj = {checklist: result}
        res.render('index', handlebarsObj);
    });
    
});

router.post('/api/create', function (req, res) {
    checklist_model.CREATE(req.body.newItem, function(result) {
        console.log(result);
        res.redirect('/');
    });
    
});

router.put('/api/update/:id', function (req, res) {
    checklist_model.UPDATE(req.params.id, function(result) {
        console.log(result);
        res.sendStatus(200); //res.redirect does not work here, it will throw a 404 and then upon refreshing the page you'll see it worked
    });
    
});

module.exports = router;
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
    })
    
});

module.exports = router;
'use strict';

// set up express
let express = require('express');
let app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//handlebars
let exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

let PORT = process.env.PORT || 8080;

//routes
let router = require('./controllers/apiRoutes');
app.use(router);

app.listen(PORT, () => console.log(`Listening on LocalHost:${PORT}`));
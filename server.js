// set up express
var express = require('express')
var app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//handlebars
var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

PORT = process.env.PORT || 8080;

//routes
var router = require('./controllers/apiRoutes');
app.use(router);

app.listen(PORT, () => console.log(`Listening on LocalHost:${PORT}`));
var express = require('express');
var ejs = require('ejs');
var app = express();



app.set('view engine', 'ejs');

app.engine('html', ejs.renderFile);

var routers = require('./routers/mainRouter');


routers.router(app);


var server = app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

var publicDir = require('path').join(__dirname,'/img');
app.use(express.static(publicDir));
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.set(express.static('public'))

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('home.ejs');
});

// Room Route

app.get('/room', function(req, res) {
  res.render("room.ejs");
});

app.get('/facilities', function(req, res) {
  res.render("facilities.ejs");
});






// about page
// app.get('/about', function(req, res) {
//   res.render('pages/about');
// });

app.listen(8080,()=>{
    console.log("start on port 3000");
});
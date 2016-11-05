var express = require('express'),
    app     = express();

app.get('/', function(req, res) {
  res.send('hello world!!!');
});

app.get('/about', function(req, res) {
  res.send('this is about page');
});

app.listen(3000);
console.log("server starting...");

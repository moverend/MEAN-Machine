var express = require('express'),
    app = express(),
    path = require('path');


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// adminRouter setup
var adminRouter = express.Router();

adminRouter.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
});

// adminRouter routes
adminRouter.get('/', function (req, res) {
  res.send('I am the dashboard');
});

adminRouter.get('/users', function (req, res) {
  res.send("I show all the users.");
});

adminRouter.get('/posts', function (req, res) {
  res.send('I show all the posts');
});

adminRouter.get('/users/:name', function (req, res) {
  res.send('Hello ' + req.params.name + '!');
});


app.use('/admin', adminRouter);

app.listen(1337);
console.log('1337 is the magic port!');

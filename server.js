//simple form handling

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//var parser = bodyParser();

app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  console.log('default');
  res.sendFile('/client/index.html');
  res.end();
});

app.post('/formhandler', function(req, res){
  
//write first name, last name, email, and interest to text file
fs = require('fs');
fs.writeFile('personInfo.txt', req.body.fname + " " + req.body.lname + " " + req.body.email + " " + req.body.program , function (err) {
  if (err) return console.log(err);
  console.log('Information > personInfo.txt');
});
  
  res.send("Thank you for your interest in " + req.body.program + " " + req.body.fname + " " +req.body.lname);
});

app.listen(process.env.PORT, process.env.HOST, function(){
  console.log("listening");
});
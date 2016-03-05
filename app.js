var express = require('express');
var app =express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());

var tweets = [
  {text: "Hai dude.", time: new Date().getTime() - 12300},
  {text: "This is cool.", time: new Date().getTime() - 1000},
  {text: "What's up?", time: new Date().getTime()},
];

app.use(express.static(__dirname + '/public'));

app.get('/ajax', function(req, res){
	res.type('json');
	res.end(JSON.stringify({tweets:tweets}));
});

app.post('/ajax', function(req, res) {
  var newTweet = {text: req.body.tweet, time: new Date().getTime()};
  tweets.push(newTweet);
  res.type('json');
  res.end(JSON.stringify(newTweet));
});

var server = app.listen(8080, function() {
	console.log("Listening on port 8080")
});





const path = require('path'),
  express = require('express'),
  app = express(),
	bodyParser = require('body-parser'),
	api = require('./api');

app.use(express.static(path.resolve('public')));
app.set('view engine', 'html');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

app.use('/api', api);

app.get('*', (req, res) => {
	res.sendFile(path.resolve('public', 'index.html'));
});

app.listen(3000, function () {
	console.log('Express server is up on port 3000');
});

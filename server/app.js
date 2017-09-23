const path = require('path'),
  express = require('express'),
  app = express(),
	bodyParser = require('body-parser'),
	db = require('./db');

app.use(express.static(path.resolve('public')));
app.set('view engine', 'html');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/api/createuser', (req, res) => {
	console.log('/api/createuser');
	console.log(req.body);

	//db.createUser();

	res.json({
		status: 'success'
	});
	res.end();
});

app.post('/api/login', (req, res) => {
	console.log('/api/login');
	console.log(req.body);

	//db.login();

	res.status(200);
	res.type('json'); // => 'application/json'
	res.send({
		status: 'success'
	});
	res.end();
});

app.get('*', (req, res) => {
	res.sendFile(path.resolve('public', 'index.html'));
});

app.listen(3000, function () {
	console.log('Express server is up on port 3000');
});

const express = require('express'),
	router = express.Router(),
	db = require('./db');

/* GET home page. */
router.post('/createuser', (req, res) => {
	console.log('/api/createuser');
	const body = req.body;

	db.createUser(body.username, body.password, () => {
		res.status(200);
		res.type('json'); // => 'application/json'
		res.send({
			status: 'success'
		});
		res.end();
	});
});

router.post('/login', (req, res) => {
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

module.exports = router;

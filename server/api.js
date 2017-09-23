const express = require('express'),
	router = express.Router(),
	db = require('./db');

/* GET home page. */
router.post('/createuser', (req, res) => {
	console.log('/api/createuser');
	const {username, password} = req.body;

	db.createUser(username, password, () => {
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
	const {username, password} = req.body;

	db.login(username, password, () => {
		res.status(200);
		res.type('json'); // => 'application/json'
		res.send({
			status: 'success',
			username
		});
		res.end();
	});
});

module.exports = router;

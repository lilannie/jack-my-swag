const express = require('express'),
	router = express.Router(),
	db = require('./db');

/** USER **/
router.post('/create-user', (req, res) => {
	console.log('/api/create-user');
	const {username, password} = req.body;

	db.createUser(username, password, () => {
		res.status(200);
		res.type('json');
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
		res.type('json');
		res.send({
			status: 'success',
			username
		});
		res.end();
	});
});

/** POSTS **/
outer.post('/create-post', (req, res) => {
	console.log('/api/create-post');
	const { title, description } = req.body;

	db.createPost(title, description, () => {
		res.status(200);
		res.type('json');
		res.send({
			status: 'success'
		});
		res.end();
	});
});

module.exports = router;

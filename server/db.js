const firebase = require('firebase'),
	config = {
		apiKey: "AIzaSyBXqb4N2Kgdi5hZFvzVcHjenqPFOFZw1J8",
		authDomain: "jack-my-swag.firebaseapp.com",
		databaseURL: "https://jack-my-swag.firebaseio.com",
		projectId: "jack-my-swag",
		storageBucket: "",
		messagingSenderId: "826921485870"
	};

firebase.initializeApp(config);

module.exports = {
	createUser: (email, password, phoneNumber, callback) => {
		firebase.auth().createUserWithEmailAndPassword(email, password, phoneNumber)
			.then(res => {
				console.log(res);
			})
			.catch(error => {
				console.log('Error createUserWithEmailAndPassword');
				console.log(error);
			});

		callback({email, phoneNumber});
	},

	login: (email, password, callback) => {
		firebase.auth().signInWithEmailAndPassword(email, password)
			.catch(error => {
				console.log('Error signInWithEmailAndPassword');
				console.log(error);
			});

		callback();
	},

	createPost: (title, description, category, callback) => {
		firebase.database().ref('/posts').push({
			title,
			description,
			category
		});

		callback();
	},

	getPosts: callback => {
		let posts = [];

		firebase.database().ref('/posts').on('value', (snapshot) => {
			snapshot.forEach((data) => {
				const { title, description } = data.val();

				posts.push({
					id: data.key,
					title,
					description
				});

			});
			callback(posts);
		});
	},

	updatePost: (params, callback) => {
		const { id, title, description } = params;

		firebase.database().ref('/posts').ref(id).set({
			title,
			description
		});
		callback();
	}
};
import firebase from 'firebase';

const config = {
	apiKey: "AIzaSyBXqb4N2Kgdi5hZFvzVcHjenqPFOFZw1J8",
	authDomain: "jack-my-swag.firebaseapp.com",
	databaseURL: "https://jack-my-swag.firebaseio.com",
	projectId: "jack-my-swag",
	storageBucket: "",
	messagingSenderId: "826921485870"
};

firebase.initializeApp(config);

export default firebase.database();
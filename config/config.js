(function() {

	// Your web app's Firebase configuration
	const firebaseConfig = {
		apiKey: "AIzaSyDujI_fylC3KoO0gkPMG-ygxs_jybortVo",
		authDomain: "foodie-s-list-46aab.firebaseapp.com",
		databaseURL: "https://foodie-s-list-46aab.firebaseio.com",
		projectId: "foodie-s-list-46aab",
		storageBucket: "foodie-s-list-46aab.appspot.com",
		messagingSenderId: "524635643063",
		appId: "1:524635643063:web:5ca68d3ce10e9d179b4132",
		measurementId: "G-EG2ZP9FPQ7"
	};
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);
	firebase.analytics();

	let signInLocation = "file:///Users/kevincheng/Documents/Kingston%2014-17-20/University%20Courses/portfolio_root_directory/pages/foodielist_root_directory/sign_in/sign_in.html";
	let signOutLocation = "file:///Users/kevincheng/Documents/Kingston%2014-17-20/University%20Courses/portfolio_root_directory/pages/foodielist_root_directory/sign_in/sign_out.html";
	let signUpLocation = "file:///Users/kevincheng/Documents/Kingston%2014-17-20/University%20Courses/portfolio_root_directory/pages/foodielist_root_directory/sign_in/sign_up.html";
	let confirmationLocation = "file:///Users/kevincheng/Documents/Kingston%2014-17-20/University%20Courses/portfolio_root_directory/pages/foodielist_root_directory/sign_in/sign_up_confirmation.html";

	// let signInLocation = "http://liyuan-cheng.com/pages/foodielist_root_directory/sign_in/sign_in.html";
	// let signOutLocation = "http://liyuan-cheng.com/pages/foodielist_root_directory/sign_in/sign_out.html";
	// let signUpLocation = "http://liyuan-cheng.com/pages/foodielist_root_directory/sign_in/sign_up.html";
	// let confirmationLocation = "http://liyuan-cheng.com/pages/foodielist_root_directory/sign_in/sign_up_confirmation.html";

	



	let registrationMessage = document.querySelector("#registration-message");

	console.log(window.location.href);

	firebase.auth().onAuthStateChanged(firebaseUser => {
		if (firebaseUser) {
			console.log(firebaseUser);
			// validSignUp = true;
			// if (window.location.href == "../foodies_db/foodie")
			// window.document.location = "../foodies_db/foodie_photos.html";
			// user = firebaseUser;
			if (registrationMessage != null) {
				registrationMessage.innerHTML = firebaseUser.email + " has successfully registered!";
				console.log(firebaseUser.email);
			}
			// registrationMessage.innerHTML = firebaseUser.email + "has successfully registered";
			// console.log(firebaseUser.email);
			if (window.location.href == signInLocation) {
				window.document.location = "../foodies_db/foodie_photos.html";
				// console.log("sign in location");
			}
		}
		else {
			console.log("not logged in");
			console.log(window.location.hostname);
			// validSignUp = false;
			if (window.location.href == signInLocation || window.location.href == signOutLocation || window.location.href == signUpLocation || window.location.href == confirmationLocation) {
				// window.document.location = "../sign_in/sign_in.html";
				console.log("sign in location");
			}
			else {
				window.document.location = "../sign_in/sign_in.html";
			}
			// window.document.location = "../sign_in/sign_in.html";
		}
	});

	// var user = firebase.auth().currentUser;
	// if (user) {
	// console.log(user.email);
	// }
	// else {
	// 	console.log("Not logged in");
	// }

}());
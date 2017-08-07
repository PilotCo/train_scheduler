// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCXSpN5xnHx2nDl47JaTAKYdHUvqS6YaiM",
    authDomain: "trainscheduler-a037d.firebaseapp.com",
    databaseURL: "https://trainscheduler-a037d.firebaseio.com",
    projectId: "trainscheduler-a037d",
    storageBucket: "",
    messagingSenderId: "774008240400"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
//pushing submit button
$("#submit").on("click", function () {
	event.preventDefault();

	var name = $("#name-input").val();
	var destination = $("#destination-input").val();
	var time = $("#time-input").val();
	var frequency = $("#frequency-input").val();
//push submit data to firebase
 	var newEmployee = {
 		name: name,
 		destination: destination,
 		time: time,
 		frequency: frequency,
 		dateAdded: firebase.database.ServerValue.TIMESTAMP
 	}
 	database.ref().push(newEmployee);
 });

database.ref().on("child_added", function(snapshot) {


//append information to our current train schedule
	var theChild = snapshot.val();
	var nextArrival = "";
	// next arrival will be calculated by looping. We will add the frequency to the the first train time as many times as it takes to pass the current time in life.
	var minutesAway = "";
	// minutesAway will be calculated by subtracting the current time from the next arrival time.
	console.log(theChild.name);
	console.log(theChild.destination);
	console.log(theChild.time);
	console.log(theChild.frequency);
	console.log(theChild.dateAdded);
	console.log(moment().format('MM'));
	$("#trainData").append('<tr><td>' + theChild.name + '</td><td>' + theChild.destination + '</td><td>' + theChild.frequency + '</td><td>' + theChild.time + '</td><td>' +  minutesAway + '</td></tr>');



});

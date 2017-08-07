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

	var theChild = snapshot.val();
	var monthsWorked = "";
	var totalBilled = "";
	console.log(theChild.name);
	console.log(theChild.destination);
	console.log(theChild.time);
	console.log(theChild.frequency);
	console.log(theChild.dateAdded);
	console.log(moment().format('MM'));
	$("#employeeData").append('<tr><td>' + theChild.name + '</td><td>' + theChild.destination + '</td><td>' + theChild.time + '</td><td>' + monthsWorked + '</td><td>' + theChild.frequency +  '</td><td>' + totalBilled + '</td></tr>');



});
	// var employeeCount = 0;
	// var newRow = $("<tr>");
	// $("<tr>").addId("tableRow" + employeeCount);
	// // newRow.attr.("employeeData", employeeCount);
	// $("#tableRow" + employeeCount).append('<td class = "name">' + name + '</td>');
	// $(".name").append(newRow);
	// $(".destination").append(newRow);
	// $(".time").append(newRow);
	// $(".frequency").append(newRow);
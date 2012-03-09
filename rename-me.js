var getBread = function (slicesToSoak) {
	var amountEach = slicesToSoak - 2;
	return amountEach;
};
	var slicesToSoak = 4;
	while (slicesToSoak > 0) {
			console.log (slicesToSoak + " slices left to soak in batter."); 
			slicesToSoak--;
	}
var amountEach = getBread(4);
	console.log( amountEach + " for me and " + amountEach + " for you!");

var getEggs = function (eggs) {
	if (eggs > 2) {
		console.log ("It's french toast time!");
	} else {
		console.log ("WTH!");
	};
};
	getEggs(3);
	
var morningGreeting = function (name, timeOfDay) {
    var greeting = timeOfDay + "," + name + "! ";
    return greeting;
};
var fullGreeting = morningGreeting("Leo", "Good morning");
 	console.log(fullGreeting + "Breakfast is served.");

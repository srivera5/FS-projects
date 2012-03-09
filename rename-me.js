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

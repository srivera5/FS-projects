//Initial Variables
var preparedBreakfastGreeting = "Breakfast is served.",
	mouthsToServe = 2,
	needToEat = ["napkins", "forks", "knives"];
	
//#1 Procedure
var getEggs = function (eggs) {
	if (eggs > 2) {
		console.log ("It's french toast time!");
	} else {
		console.log ("WTH!");
	};
};
	getEggs(3);

//#2 Boolean Function
var useSyrup = function (haveMapleSyrup, haveAgaveNectar) {
	var syrupResponse;
		if (haveMapleSyrup === true) {
			syrup = "maple syrup";
		} else if (haveMapleSyrup === false && haveAgaveNectar === true) {
					syrup = "agave nectar";
				} else {
				  console.log("We're doomed! No syrup or subsitute!");
		}
var syrupResponse = console.log("For a topping, we'll use this " + syrup + ".");
	return syrup;	
		};
useSyrup(false, true);
	console.log("Mmmm, " + syrup + ".");
	
//#3 Number Function
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

//#4 Array Function
var getToppings = function (teaspoon, [c, ps]) {
	var servings = mouthsToServe * teaspoon;
	return servings;
		   for (servings; servings < 0; servings--) {
		   		console.log ("We'll need to sprinkle " + servings + " of " + c + ps + ".");
				};
	
console.log("There's a total of " + teaspoon + " teaspoons of " + c + ps + "on each."); };
getToppings(1, ["cinammon", "powdered sugar"]);


//#5 String Function
var morningGreeting = function (name, timeOfDay) {
    var greeting = timeOfDay + ", " + name + "! ";
    return greeting;
};
var fullGreeting = morningGreeting("Leo", "Good morning");
 	console.log(fullGreeting + preparedBreakfastGreeting);	

console.log("Cooking for " + mouthsToServe + " sure did take a lot of time. Anyway, can you grab us some " + needToEat[0] + "?");
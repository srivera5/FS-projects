var morningGreeting = function (name, timeOfDay) {
    var greeting = timeOfDay + "," + name + "! ";
    return greeting;
};
var fullGreeting = morningGreeting("Leo", "Good morning");
   console.log(fullGreeting + "Brekfast is served.");
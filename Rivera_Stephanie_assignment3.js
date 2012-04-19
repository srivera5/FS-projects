//Stephanie Rivera
//Story plot: shopping adventure
//SDI Project 3

//Object with Accessor
var myself = {
	hobby: "shopping",
	bored: true,
	sayHobby: function () {
		if(this.bored === true) {
		console.log("I'm so bored. I think I'll go " + this.hobby);
		} else {
		console.log("I'll just watch some more tv.");
		}
	};
myself.sayHobby();
setHobby = "shopping with a friend.";
myself.sayHobby();




//First shop at the mall. Decide if I like a dress.

var outfitWorthy = function (brandName,color) {
  
    if (brandName === "Betsey Johnson") {
      if (color === 'skullblack' || color === 'cottoncandyblue') {
            console.log("OMFG! Take my credit card now!");
      } else {
		console.log("Meh. I can do better.");
      }
    } else {
      return false;
    }
};
outfitWorthy("Betsey Johnson", "hotpink");

//shopping spree/allowance

var paycheck = function (x) {
  return x * x;
};

var irsRefund = function (x) {
  return paycheck(x) * x;
  console.log("I have " + x + "spend!");
};

paycheck(1000);

//NOTE! Revise paycheck function to include math on bills as such below:
var budget = function (bills) {
  if (bills<200) {
    return true;
  } else {
    return false;
  }
};

console.log(budget(199));
console.log("After I pay this off I can still go shopping.");
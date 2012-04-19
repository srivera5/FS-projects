//Stephanie Rivera
//Story plot: shopping adventure
//SDI Project 3

//Object with Accessor: Story begins with deciding what to do
var myself = {
	hobby: "shopping", //Property: String
	bored: true, //Property: Boolean
	sayHobby: function () { //Method with no return
		if(this.bored === true) { //Conditional 
		console.log("I'm so bored. I think I'll go " + this.hobby);
		} else {
		console.log("I'll just watch some more tv.");
		}
	}
}
myself.sayHobby();
myself.hobby ="shopping with a friend.";
myself.sayHobby();

//Method Procedure :Look through address book and find friend to go with
var friend1 = {
	name: "Bekah", //Property String
	number: "258-6767",
	avail: "not available to go with me to the mall.",
	answer: function() {
	console.log(this.name + " is " + this.avail); } //Procedure Method
	}
var friend2 = {
	name: "Crystal", //Property String
	number: "258-6798",
	avail: "not available to go with me to the mall.",
	answer: function() {
	console.log(this.name + " is " + this.avail); }  //Procedure Method
	}
var friend3 = {
	name: "Londy", //Property Strings
	number: "258-6701",
	avail: "available to go with me to the mall.",
	answer: function() {
	console.log(this.name + " is " + this.avail); }  //Procedure Method
	}

var friends = [friend1, friend2, friend3];

var call = function(invite) {
	return invite.answer(); }

var listOfFriends = function() {
	var i = friends.length;
	for(i=0; i<friends.length; i++) {
	call(friends[i]); }
};
listOfFriends();
	
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
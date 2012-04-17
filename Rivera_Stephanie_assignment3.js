//Stephanie Rivera
//Story plot: shopping adventure
//SDI Project 3

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



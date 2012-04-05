// Author: Jasmine Sloan
// 04/03/2012
// Delierable 2
// The Birthday Party

// Variables 
var april7th = "Birthday Party"
var cases = 24
var potentialNumOfGuests = 16
var numberOfGuests = 8
var bottle = "24 shots"
var x = true
var y = false
var guest1 = "Candyse",
	guest2 = "Sasha",
	guest3 = "Camille"
;	

//String
console.log("The " + april7th + " is coming up, " + "everyone is so excited! "
);
console.log("Hopefully the " + numberOfGuests + " guests will show up so there will be a " 
	+ april7th
);

//Numbers
console.log(potentialNumOfGuests + 8 + ", is the maximum number of people allowed at the party "
); 

potentialNumOfGuests = (16 - 8 / 20) * (0);

console.log("If 0 guests arrive there will be no " + april7th
);

console.log(potentialNumOfGuests);


//Boolean

if (x) { "Then all the guest wll show up and the party will go on"
};

if (y) { "If no one shows up to the party we will go on"
};

console.log(x)
console.log(y)

//Array

var guests = ["Candyse", "Sasha", "Camille"];

var example = ["", [], {}, function(){}, undefined, true, false, 0, 50];

var swimming = [
	"will be swimming",
	"doesn't want to get her hair wet",
	"can not swim"
];

for (var i=0, b=guests.length; i < b; i++) {
	console.log( "Guest " + guests[i] + " maybe " + swimming[i] );	
};


// for-loop 

for ( var cases = 24; cases > 0; cases--) {
	console.log(cases + " needed to supply the party. ");
};

console.log(" all out, in need of more cases. ");


//Functions

var bottle = "24 shots"
var numberOfGuests = 8;

var getBottles = function(b, name) {
	var bottle = b * numberOfGuests / 2;
	console.log(bottle + " bottles of " + name );
};

getBottles(3, "Grey Goose");
getBottles(4, "Patron");
getBottles(5, "Ciroc");

var foodNames = [ "Wings", "Hot Dogs", "Hamburgers", "Rib Slab" ],
	amountOfFood = [ 50, 20, 30, 5 ];
var buyOneFood = function(foodName, amountThisFood) {
var buyAllFood = function(foodNames, amountOfFood) {}; // buyAllFood	
	

console.log("Grocery shopping for " + foodName + " need "
	+ amountThisFood + " to have enough");

for (var amount = 0; amount < amountThisFood; amount += 5) {
	var amountPurchased = amountThisFood - amount;

	var foodName = foodNames[foodNumber]
		amountThisFood = amountOfFood[foodNumber];
	buyOneFood(foodName, amountThisFood);
	
	console.log(amount + " needed " + amountPurchased + " food!");
}
console.log("We have enough food for " + april7th + ".");

};
	
for (var foodNumber = 0; foodNumber < foodNames.length; foodNumber++) {
	buyOneFood(foodNumber);

} // for foodNumber

// functions return a value
var timeOfParty = function(pm) {
	var currentHour = (new Date()).getHours(), 
		timeOfDay, timing;
	if (timeOfParty < 12) {timeOfDay = "too early" };
	if (timeOfParty < 6) {timeOfDay = "too late"; }
	else {timeOfDay = "good timing"; }
	timing = ("Not too early, not too late, " + timeOfDay + " , " + pm + "." );
	//console.log(timing);
	return timing; 

};

 var perferctTiming = timeOfParty("Hello, Welcome to the party! ");
 console.log(perferctTiming);

 var partyFavors = function(cashAllotted) {
 	var pricePerFavor = 12,
 		fullFavor;
 	if (cashAllotted < pricePerFavor){
 		console.log("Can't afford party favors.");
 		return 0;	
 	}
 	fullFavor = Math.floor(cashAllotted / pricePerFavor);
 	return FullFavor;	
 };

var purchasedFavors = partyFavors(10);
console.log("Guests receive " + purchasedFavors + " party favors!");

var partyFavors = function(cashAllotted) {
 	var pricePerFavor = 12,
 		fullFavor;
 	if (cashAllotted < pricePerFavor){
 		console.log("Can't afford party favors.");
 		fullFavor = 0;	
 	}
 	else {
 		fullFavor = Math.floor(cashAllotted / pricePerFavor);
 }
 	return fullFavor;	
 };

var purchasedFavors = partyFavors(13);
console.log("Guests appreciate " + purchasedFavors + " party favors, extremely excited!");


 



     











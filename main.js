// Create at least 3 JavaScript objects.

// Each object should have at least one method.

// Use the object literal method and the constructor function method at least once each to construct these objects.

// * REMEBER the object literal method and constructor method are different!! * Reference the slide pdf for clarity.

 

// Instantiate the objects and exemplify your understanding of them through JavaScript code and comments.

// Enjoy your weekend!


var my_beverage = {
	kind: 'Sprite',
	fizz: true,
	size: 'large',
	sugar: '45g',
	makenoise: function(){
		alert('gulp!');
	}
}


// -------------------------------------------

var Farmanimal = function(species, weightkg, feed, sound) {
	this.species = species;
	this.weightkg = weightkg;
	this.feed = feed;
	this.sound = sound;
	this.noise = function(){
		console.log ('This ' + this.species + ' makes the sound ' + this.sound);
		
	}
}

var my_farmanimal = new Farmanimal('cow', 168, 'grass', 'moo');
var your_farmanimal = new Farmanimal('pig', 200, 'slop', 'oink');

console.log(my_farmanimal.feed);
console.log(my_farmanimal.weightkg);
your_farmanimal.noise();

// -------------------------------------------

var Guitar = function(brand, strings, colour) {
	this.brand = brand;
	this.strings = strings;
	this.colour = 'blue';
}

Guitar.prototype.countryorigin = 'usa';

var guitar_acoustic = new Guitar ('Fender', 6)
var guitar_electric = new Guitar ('Gibson', 12)

console.log(guitar_electric.brand);
guitar_acoustic.color = 'green';
console.log(guitar_acoustic);

var Guitar_special_edition = function(brand, strings, colour){
	this.special_edition = true;
	this.twang = function(){
		console.log('Twang!');
	}
	Guitar.call(this, brand, strings, colour);
}

var super_guitar = new Guitar_special_edition ('Takamine', 6);

console.log(super_guitar);
console.log(super_guitar.twang());






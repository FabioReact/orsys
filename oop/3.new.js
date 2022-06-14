function Hero(name, fullname, strength, intelligence) {
	this.name = name;
	this.fullname = fullname;
	this.powerstats = {
		strength,
		intelligence,
	}
	// this.strength = strength;
	// this.intelligence = intelligence;
}

Hero.prototype.introduce = function () {
	console.log(
		`${this.name} - identité secrète ${this.fullname} - entre dans l'arène. Ce dernier a une force de ${this.powerstats.strength} et une intelligence de ${this.powerstats.intelligence}.`,
	);
};

const batman = new Hero("Batman", "Bruce Wayne", 70, 95);
batman.introduce()

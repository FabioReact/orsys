class Hero {
	// # -> la variable est privée et n'est donc pas accessible depuis les instances de la classe
	#privateVariable = true
	constructor(name, fullname, strength, intelligence) {
		this.name = name;
		this.fullname = fullname;
		this.powerstats = {
			strength,
			intelligence,
		}
	}

	introduce() {
		console.log(
			`${this.name} - identité secrète ${this.fullname} - entre dans l'arène. Ce dernier a une force de ${this.powerstats.strength} et une intelligence de ${this.powerstats.intelligence}.`,
		);
	}
}

const wonderWoman = new Hero('Wonder Woman', 'Diana Prince', 90, 90);
wonderWoman.introduce()
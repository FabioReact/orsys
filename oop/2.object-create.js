const heroBluePrint = {
	introduce: function () {
		console.log(
			`${this.heroName} - identité secrète ${this.fullname} - entre dans l'arène. Ce dernier a une force de ${this.powerstats.strength} et une intelligence de ${this.powerstats.intelligence}.`,
		);
	},
	powerstats: {
		strength: 0,
		intelligence: 0,
	},
};

const hulk = Object.create({
	...heroBluePrint,
	heroName: "Hulk",
	fullname: "Bruce Banner",
	powerstats: {
		...heroBluePrint.powerstats,
		strength: 90,
		intelligence: 50,
	},
});
hulk.introduce();

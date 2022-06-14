const daenerys = {
	firstname: "Daenerys",
	lastname: "Targyryen",
	bio: {
		surname: ["mother of dragons"],
	},
};

if (daenerys.bio.parents)
	console.log(daenerys.bio.parents.father); // TypeError: Cannot read properties of undefined (reading 'father')

// Utilisation de l'optionnal chaining - Si ce qui est à gauche du "?" est undefined, on n'evaluera pas ce qui se trouve à droite pour éviter de générer une erreur
console.log(daenerys.bio.parents?.father);
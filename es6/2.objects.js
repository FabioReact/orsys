"use strict";

// Depuis ES6 on peut mettre le 'trailing comma' (virgule de fin)
const formateur = {
	firstname: "Fabio", // primitif
	lastname: "Ginja", // primitif
	age: 33, // primitif
	langues: ['français', 'anglais'] // reference
};

const inputUtilisateur = 'passion';

// Utile pour ajouter une propriété dont le nom est contenu dans une variable
formateur[inputUtilisateur] = ['cinema', 'danse'];

console.log(formateur);

// const secondFormateur = formateur; // ❌ Attention, ici je copie l'addresse mémoire et non l'objet
// Copie (⚠️superficielle) à l'aide du spread operator
const secondFormateur = {
	...formateur,
	langues: [...formateur.langues],
	passion: [...formateur.passion],
};
secondFormateur.firstname = 'Alberto';
secondFormateur.passion.push('peche');
console.log(formateur);

const thirdFormateur = structuredClone(formateur);

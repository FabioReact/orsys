"use strict";
// var
function withVar() {
	// En JS, on a affaire au hoisting (remontée de variable)
	var condition;
	// var a la portée de la fonction
	if (1 < 2) {
		condition = true;
	}
	console.log(condition);
}
withVar();

// let - const
function withLet() {
	// let/const a la portée du bloc seulement
	if (1 < 2) {
		let condition = true;
	}
	// console.log(condition) // genere une erreur
}
withLet();

const annee = 2022;
// annee = 2023 // TypeError: Assignment to constant variable. -> Valable pour la ré-affectation

const villes = ["Tokyo", "Berlin"];
villes.push("Nairobi");

// Regle: j'utilise toujours const, sauf si je dois absolument reaffecter une variable

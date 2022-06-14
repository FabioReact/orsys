const invoices = [1000, 1500, 1200, 3000];

function addVAT(number) {
	return number * 1.2;
}

// La méthode map itère sur chacun des element d'un tableau et applique la fonction précisée en argument pour en retourner le resultat dans un nouveau tableau
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const invoicesWithVAT = invoices.map(addVAT);

console.log(invoices);
console.log(invoicesWithVAT);

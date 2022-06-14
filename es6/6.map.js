const invoices = [1000, 1500, 1200, 3000, 3500, 2400];

function addVAT(number) {
	return number * 1.2;
}

// La méthode map itère sur chacun des element d'un tableau et applique la fonction précisée en argument pour en retourner le resultat dans un nouveau tableau
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const invoicesWithVAT = invoices.map(addVAT);

console.log(invoices);
console.log(invoicesWithVAT);

// Filter retourne un tableau de taille inférieur ou égal à n selon la condition passée
const bigAmounts = invoices.filter((invoice) => invoice > 2000);

// Some retourne un boolean décrivant si au moins une des valeurs de mon tableau remplie une condition donnée
const invoiceSupTo3000 = invoices.some((invoice) => invoice > 3000); // true
const invoiceSupTo5000 = invoices.some((invoice) => invoice > 5000); // false
console.log(invoiceSupTo3000, invoiceSupTo5000);

// Every retourne un boolean décrivant si toutes les valeurs de mon tableau remplie une condition donnée
const everyInvoiceSupTo1000 = invoices.some((invoice) => invoice > 1000); // true
const everyInvoiceSupTo2000 = invoices.some((invoice) => invoice > 2000); // false

// Find retourne l'element de mon tableau qui remplie une condition donnée
const firtBigInvoice = invoices.find((invoice) => invoice > 2000);

// includes retourne un boolean indiquant si mon element existe ou non dans mon tableau
const includes3000 = invoices.includes(3000);

// reduce parcours notre tableau et lui applique une fonction donnée puis retourne un accumulateur
// Je souhaite retourner un tableau avec une facture et TVA à 5%
const withLowerVAT = invoices.reduce((accumulateur, valeurActuelle) => {
	const valeurAvecTVA = valeurActuelle * 1.05;
	accumulateur.push(valeurAvecTVA);
	return accumulateur;
}, []);

// Exercice: Avec reduce, trouver le montant total des factures avec TVA de 5%
const totalWithLowerVAT = withLowerVAT.reduce((accumulateur, valeurActuelle) => {
	return accumulateur + valeurActuelle;
}, 0);
console.log(totalWithLowerVAT);

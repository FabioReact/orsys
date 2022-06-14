/* Etape 0
function addVAT(number) {
	return number * 1.2;
}
*/

/* Etape 1
const addVat = function(number) {
	return number * 1.2;
}
*/

/* Etape 2
Si ma fonction flechée ne possède qu'une seule ligne de traitement et que cette ligne est un return, alors je peux faire un return implicite
const addVat = (number) => number * 1.2;
*/

// Etape 3
// Si ma fonction flechée ne possède qu'UN seul argument, je peux ommettre les parentheses à ce dernier
const addVat = number => number * 1.2;

// ⚠️ Attention, une fonction flechée conserve toujours le contexte initial/de départ/ne change pas de contexte (this)

// Exercice - Créer une fonction qui retourne un nouvel hero qui aura cette forme: un name (nom superhero), gender, fullname (vrai nom) avec comme paramètre par defaut "Unknown"
const newHero = (name, gender, fullname = 'Unknown') => ({
	name, // shorthand property - equivalent à name: name
	gender,
	fullname,
})

const ironMan = newHero('Iron man', 'm', 'Tony Stark');
const hulk = newHero('Hulk', 'm');
console.log(hulk);

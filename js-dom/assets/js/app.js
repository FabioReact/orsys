console.log("Script App launched");

const app = document.getElementById("app");
app.innerHTML = "Content injected by Javascript";

const products = [
	{
		id: 1,
		name: 'Sweater',
		description: 'Christmas sweater',
		price: 49,
		image: 'https://m.media-amazon.com/images/I/91zgO6wYIfL._AC_UY445_.jpg'
	},
	{
		id: 1,
		name: 'Tshirt',
		description: 'Lorem ipsum dolor sit amet.',
		price: 49,
		image: 'https://m.media-amazon.com/images/I/91zgO6wYIfL._AC_UY445_.jpg'
	},
]

// Exercice 1
// Pour chaque produit, créer une vignette dans une liste et l'afficher
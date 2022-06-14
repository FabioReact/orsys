const product = {
	id: 1,
	name: "Sweater",
	description: "Christmas sweater",
	price: 49,
	image: "https://m.media-amazon.com/images/I/91zgO6wYIfL._AC_UY445_.jpg",
};

// const id = product.id;
// const name = product.name;
// const desc = product.description;
// const price = product.price;
// const image = product.image;

// Avec la destruction (destructuring)
const { id, name, description: desc, price, image } = product;
// Ici je destructure description et je le renomme en desc

console.log(desc)


const colors = ["#f00", "#0f0", "#00f"];
// const red = colors[0];
// const green = colors[1];
// const blue = colors[2];
const [red, green, blue] = colors;
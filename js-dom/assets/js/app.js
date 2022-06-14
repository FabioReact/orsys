console.log("Script App launched");

const app = document.getElementById("app");
app.innerHTML = "Content injected by Javascript";

class Product {
	constructor({ id, name, description, price, image }) {
		this.id = id
		this.name = name
		this.description = description
		this.price = price
		this.image = image
	}

	render() {
		const article = document.createElement("article");
		article.classList.add('rounded-xl', 'flex', 'flex-col', 'w-72', 'shadow-lg', 'overflow-hidden')
		article.innerHTML = `
			<img src="${this.image}" alt="${this.name}" />
			<div class="p-4">
				<h3 class="uppercase tracking-widest text-center text-xl font-light">${this.name}</h3>
				<p class="text-gray-600 text-sm py-2">${this.description}</p>
				<div class="flex">
					<span class="text-blue-700 font-semibold">${this.price}€</span>
					<button class="border border-gray-400 text-gray-800 rounded text-sm px-2 ml-auto">Add to cart</button>
				</div>
			</div>
		`;
		return article
	}
}

class App {
	static init() {
		for (const product of products) {
			const productItem = new Product(product)
			const article = productItem.render()
			app.appendChild(article)
		}
	}
}

const products = [
	{
		id: 1,
		name: "Sweater",
		description: "Christmas sweater",
		price: 49,
		image: "https://m.media-amazon.com/images/I/91zgO6wYIfL._AC_UY445_.jpg",
	},
	{
		id: 1,
		name: "Tshirt",
		description: "Colorful Shirt",
		price: 20,
		image: "https://cdn.hoodielab.com/wp-content/uploads/2020/12/4_T-Shirt-Full-Edit-Front-6-400x400.jpg",
	},
];

App.init();
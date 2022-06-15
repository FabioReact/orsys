const app = document.getElementById("app");

class Component {
	createElement(tagName, classnames = []) {
		const rootElement = document.createElement(tagName);
		rootElement.classList.add(...classnames);
		return rootElement;
	}
}

class Product extends Component {
	constructor({ id, name, description, price, image }) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.price = price;
		this.image = image;
	}

	render(parentId = "app") {
		const article = this.createElement("article", [
			"rounded-xl",
			"flex",
			"flex-col",
			"w-72",
			"shadow-lg",
			"overflow-hidden",
		]);
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
		const parent = document.getElementById(parentId)
		parent.appendChild(article)
	}
}

class ProductList extends Component {
	// Cette classe sera chargée de créer une section avec un titre h2 et devra ensuite afficher tout les produits à l'intérieur de cette section
	render(parentId = "app") {
		const list = this.createElement("section");
		list.setAttribute("id", "product-list");
		list.innerHTML = "<h2 class='text-center text-xl uppercase tracking-widest'>Store</h2>"
		const parent = document.getElementById(parentId)
		parent.appendChild(list)
		for (const product of products) {
			const productItem = new Product(product);
			productItem.render("product-list");
		}
	}
}

class App {
	static init() {
		// for (const product of products) {
		// 	const productItem = new Product(product);
		// 	productItem.render();
		// }
		const productList = new ProductList();
		productList.render()
		const cartItem = new Cart();
		cartItem.render();
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
		image:
			"https://cdn.hoodielab.com/wp-content/uploads/2020/12/4_T-Shirt-Full-Edit-Front-6-400x400.jpg",
	},
];

class Cart extends Component {
	render(parentId = "app") {
		const aside = this.createElement("aside", ["rounded-xl", "shadow-lg"]);
		aside.innerHTML = `
			<div class="p-4">
				<h3 class="uppercase tracking-widest text-center text-xl font-light">Panier</h3>
				<p class="text-gray-600 text-sm py-2">Produit 1</p>
				<p class="text-gray-600 text-sm py-2">Produit 2</p>
				<p class="text-gray-600 text-sm py-2">Produit 3</p>
				<span class="text-blue-700 font-semibold">Total 100€</span>
			</div>
		`;
		const parent = document.getElementById(parentId)
		parent.appendChild(aside)
	}
}

App.init();

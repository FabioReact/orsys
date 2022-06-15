import { App } from '../app.js'
import { Component } from "./component.js";

export class Product extends Component {
	constructor({ id, name, description, price, image }, parentId = "app") {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.price = price;
		this.image = image;
		this.parentId = parentId;
		this.render();
	}

	render() {
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
		const parent = document.getElementById(this.parentId);
		article.querySelector("button").addEventListener("click", () => {
			App.addProductToCart({
				name: this.name,
				price: this.price,
			});
		});
		parent.appendChild(article);
	}
}

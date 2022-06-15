import { Product as ProductItem } from "./product.js";
import { Component } from "./component.js";

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

export class ProductList extends Component {
	constructor(parentId = "app") {
		super();
		this.parentId = parentId;
		this.render();
	}
	render() {
		const list = this.createElement("section");
		list.setAttribute("id", "product-list");
		list.innerHTML =
			"<h2 class='text-center text-xl uppercase tracking-widest'>Store</h2>";
		const parent = document.getElementById(this.parentId);
		parent.appendChild(list);
		for (const product of products) {
			new ProductItem(product);
		}
	}
}

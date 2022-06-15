import { Component } from "./component.js";

class Cart extends Component {
	#cartItems = [];
	constructor(parentId = "app") {
		super();
		this.parentId = parentId;
		this.render();
	}

	get getTotal() {
		return this.#cartItems.reduce((acc, p) => acc + p.price, 0);
	}

	set setCart(product) {
		this.#cartItems.push(product);
		document.getElementById("cart-list").innerHTML = this.#cartItems.reduce(
			(accumulateur, item) =>
				`${accumulateur}<p>${item.name} <span>x1</span> <span>${item.price}€</span></p>`,
			"",
		);
		document.getElementById("cart-total").innerHTML = `Total ${this.getTotal}€`;
	}

	addToCart(product) {
		this.#cartItems.push(product);
		document.getElementById("cart-list").innerHTML = this.#cartItems.reduce(
			(accumulateur, item) =>
				`${accumulateur}<p>${item.name} <span>x1</span> <span>${item.price}€</span></p>`,
			"",
		);
		document.getElementById("cart-total").innerHTML = `Total ${this.getTotal}€`;
	}

	render() {
		const aside = this.createElement("aside", ["rounded-xl", "shadow-lg"]);
		aside.innerHTML = `
			<div class="p-4">
				<h3 class="uppercase tracking-widest text-center text-xl font-light">Panier</h3>
				<div id="cart-list">
					${this.#cartItems.map(
						(item) =>
							`<p>${item.name} <span>x1</span> <span>${item.price}€</span></p>`,
					)}
				</div>
				<span id="cart-total" class="text-blue-700 font-semibold">Total ${
					this.getTotal
				}€</span>
			</div>
		`;

		const parent = document.getElementById(this.parentId);
		parent.appendChild(aside);
	}
}

export default Cart;

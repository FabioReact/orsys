import ShoppingCart from "./components/cart.js";
import { ProductList } from "./components/product-list.js";

export class App {
	static init() {
		this.cart = new ShoppingCart();
		new ProductList();
	}

	static addProductToCart(product) {
		this.cart.addToCart(product);
		// this.cart.setCart = product;
	}
}

App.init();

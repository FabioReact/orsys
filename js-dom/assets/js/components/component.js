export class Component {
	createElement(tagName, classnames = []) {
		const rootElement = document.createElement(tagName);
		rootElement.classList.add(...classnames);
		return rootElement;
	}
}

import logo from "./logo.svg";
import customClasses from "./App.module.css";
import { Component } from "react";
import Button from "./components/Button";

// class App extends Component {
//   name = "Fabio";
//   h1Style = {
//     textAlign: 'center',
//   };
// 	render() {
// 		return (
//       <section>
//       <h1 className={`cyan ${customClasses["text-uppercase"]}`} style={this.h1Style}>Learn React with {this.name}</h1>
//       <h2>{this.props.welcomeMessage}</h2>
//     </section>
// 		);
// 	}
// }

function App(props) {
	const name = "Fabio";
	const h1Style = {
		textAlign: "center",
	};
	return (
		<section>
			<h1 className={`cyan ${customClasses["text-uppercase"]}`} style={h1Style}>
				Learn React with {name}
			</h1>
			<h2>{props.welcomeMessage}</h2>
			<Button>Envoyer</Button>
		</section>
	);
}

export default App;

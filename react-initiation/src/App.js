import logo from "./logo.svg";
import customClasses from "./App.module.css";
import { Component } from "react";
import Button from "./components/Button";
import DiscoBox from "./components/DiscoBox/DiscoBox";
import CreateBox from "./components/CreateBox/CreateBox";

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
			<DiscoBox />
			<h2>Exercice</h2>
			<p>
				Créer un composant "CreateBox" qui créer un nouvel li avec un nombre
				aléatoire dès aue l'on clique sur le bouton de notre composant.
			</p>
			<CreateBox />
		</section>
	);
}

export default App;

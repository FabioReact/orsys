import { useState } from "react";

const LiItem = ({ number }) => {
	return <li>{number}</li>;
};

const CreateBox = () => {
	const [numbers, setNumbers] = useState([]);
	const handleClick = () => {
		// Version succinte
		// setNumbers(prevNumbers => [...prevNumbers, (Math.random() * 100).toFixed(2)])
		// Version par étapes
		setNumbers((prevNumbers) => {
			const newNumber = (Math.random() * 100).toFixed(2);
			const newNumbers = [...prevNumbers, newNumber];
			return newNumbers;
		});
	};
	return (
		<section>
			<button onClick={handleClick}>CreateBox</button>
			<ul>
				{numbers.map((number, index) => (
					<LiItem key={index} number={number} />
				))}
			</ul>
		</section>
	);
};

export default CreateBox;

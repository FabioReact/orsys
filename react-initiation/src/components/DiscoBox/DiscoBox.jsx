import { useState, useRef } from "react";

const DiscoBox = () => {
	let counterRef = useRef(0);
	// const [counter, setCounter] = useState(0)
	const colors = ["#f25022", "#7fba00", "#00a4ef", "#ffb900"];
	const [color, setColor] = useState(colors[0]);
	const style = {
		height: "300px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: color,
	};

	const handleClick = () => {
		counterRef.current = (counterRef.current + 1) % (colors.length);
		setColor(colors[counterRef.current]);
		// setCounter((counter + 1) % (colors.length));
	};

	return (
		<section style={style}>
			<button onClick={handleClick}>Change Background</button>
		</section>
	);
};

export default DiscoBox;




import React from "react"; 

const Title = (props) => {   
	return (
		<h1>
			{props.rolled
				? props.player1 === props.player2
					? "It's a draw!"
					: props.player1 > props.player2
					? "Player 1 wins!"
					: "Player 2 wins!"
				: "Click to Roll"}
		</h1>
	);
};

export default Title;
import React from "react"; 

const Button = (props) => {
  return (
		<button onClick={props.handleClick} className="btn btn-warning">
			Roll the Dice
		</button>
	);
}

export default Button;
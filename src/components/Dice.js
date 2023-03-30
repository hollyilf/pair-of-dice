import React from "react";
import dice6 from "../images/dice6.png"

const Dice = (props) => {

	const player = props.player;
	const dice = props.dice;

  return (
    <div className="dice-div">
      <p>Player {player}</p>
      {dice ? (
        <img src={dice} alt={"dice " + player} className="dice" />
      ) : (
        <img src={dice6} alt={"dice " + player} className="dice" />
      )}
    </div>
  );
};

export default Dice;
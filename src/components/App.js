import React, {useState} from "react";
import "../App.css";
import Title from "./Title";
import Dice from "./Dice";
import Button from "./Button";
import Footer from "./Footer";

import dice1 from "../images/dice1.png";
import dice2 from "../images/dice2.png";
import dice3 from "../images/dice3.png";
import dice4 from "../images/dice4.png";
import dice5 from "../images/dice5.png";
import dice6 from "../images/dice6.png";

const App = () => {

  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

  const [roll, setRoll] = useState({
		player1: 6,
		player2: 6,
    rolled: false
	});
  
  const handleClick = () => {
    var randomNumber1 = Math.floor((Math.random() * 6));    
    var randomNumber2 = Math.floor(Math.random() * 6);
    setRoll({
			player1: randomNumber1,
			player2: randomNumber2,
			rolled: true
		});
  }

  return (
		<div className="container">
			<div className="row">
				<Title
					rolled={roll.rolled}
					player1={roll.player1}
					player2={roll.player2}
				/>
			</div>
			<div className="row">
				<div className="col col-player1">
					<Dice dice={diceImages[roll.player1]} player="1" />
				</div>
				<div className="col col-player2">
					<Dice dice={diceImages[roll.player2]} player="2" />
				</div>
			</div>
			<div className="row">
				<Button handleClick={handleClick} />
			</div>
			<Footer />
		</div>
	);
}

export default App;
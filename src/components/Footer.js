import React from "react";

const Footer = () => {
  return (
		<footer>
			<a href="https://github.com/hollyilf">
				<i className="fa-brands fa-github" />
			</a>
			<br />
      © Holly L-F, {new Date().getFullYear()}
			<br />
			<a href="https://www.flaticon.com/free-icons/dice" title="dice icons">
				Dice icons created by IYIKON
			</a>{" "}
		</footer>
	);
}

export default Footer;
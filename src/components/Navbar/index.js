import React from "react"
import "./style.css";

const Navbar = props => (
<nav className="navbar sticky-top">
<h2 className="scoreBoard">Current Score: {props.score} Top Score: {props.topScore}</h2>
<hr />
    <h3 className="scoreBoard">{props.clickMessage}</h3>
</nav>
)

export default Navbar;
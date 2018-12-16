import React from "react"

const Navbar = props => (
<nav className="navbar sticky-top navbar-light bg-light justify-content-center">
  <a className="navbar-brand" href="#"></a>
  Current Score: {props.score} Top Score: {props.topScore}
  <br></br>
  {props.clickMessage}
</nav>
)

export default Navbar;
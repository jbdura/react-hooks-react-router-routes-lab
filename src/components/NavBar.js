import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div>
    <div className="navbar">
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/movies" exact>Movies</NavLink>
      <NavLink to="directors" exact>Directors</NavLink>
      <NavLink to="actors" exact>Actors</NavLink>
    </div>
  </div>;
}

export default NavBar;

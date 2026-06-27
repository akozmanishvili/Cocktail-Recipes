import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <NavLink to={"/"}>Home Page</NavLink>
      <NavLink to={"/cocktails"}>Cocktails Search</NavLink>
    </nav>
  );
};

export default Navbar;

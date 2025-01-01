import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../App";
import Logo from "../Logo/Logo";
import "./Navbar.css";

const Navbar = () => {
  const { inputValue, setInputValue, getRecipes } = useContext(Context);

  // Handle the input value
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="nav">
      <NavLink to={"/"} className="logo">
        <Logo />
      </NavLink>
      <form className="nav-serach">
        <input
          type="text"
          placeholder="Serach for recipes..."
          value={inputValue}
          onChange={handleInput}
        />
        <button onClick={getRecipes}>
          <FaSearch />
        </button>
      </form>
      <div className="nav-items">
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>

          <li>
            <NavLink to={"/favorites"}>Favotites</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

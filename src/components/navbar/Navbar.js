
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillCartDashFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";



function Navbar() {
  const activeclass = ({ isActive }) => {
    return isActive ? "active" : "";
  }
  return (

    <div className="nav">
      <a id="navicon" href="#">
        C
      </a>

      <div className="navbar ">
        <div className="pages">
          <NavLink className={"activeclass"} to="/home">
            Home
          </NavLink>

        </div>
        <div className="pages">
          <NavLink className={"activeclass"} to="/about">
            About
          </NavLink>

        </div>
        <div className="pages">
          <NavLink className={"activeclass"} to="/products" >
            Products
          </NavLink>
        </div>
        <div className="pages">
          <NavLink className={"activeclass"} to="/cart" >Cart
          </NavLink>
        </div>
      </div>
      <div className="cart">
        <div>
          <a href="#">
            <BsFillMoonFill />
          </a>
        </div>

        <div>
          <a href="#" className="cart-logo">
            <BsFillCartDashFill />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
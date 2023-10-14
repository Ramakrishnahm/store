// import { useState } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillCartDashFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function Navbar() {
  // const[user,setUser] = useState({id:"",username:""})
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const userdata = JSON.parse(localStorage.getItem)("user")
  //   setUser(userdata)
  // },[])

  // const handleLogout = () => {
  //   localStorage.removeItem("user")
  //   localStorage.removeItem("token")
  //   navigate('/login')
  // }

  
  return (
    <div className="nav">
      <a id="navicon" href="#">
        C
      </a>

      <div className="navbar ">
        <div className="pages">
          <NavLink to="/home">Home</NavLink>
        </div>
        <div className="pages">
          <NavLink to="/about">About</NavLink>
        </div>
        <div className="pages">
          <NavLink to="/products">Products</NavLink>
        </div>
        <div className="pages">
          <NavLink to="/cart">Cart</NavLink>
        </div>
        
      </div>
      <div className="cart">
        <div>
          <a href="#">
            <BsFillMoonFill />
          </a>
        </div>
        {/* <button onClick={handleLogout}>Logout</button> */}

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

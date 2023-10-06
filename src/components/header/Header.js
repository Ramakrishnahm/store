import { NavLink } from "react-router-dom";


function Header() {
    return (
        <div className="header">
            <div>
            <NavLink  to="/Login">
            sign in/Guest
        </NavLink>
                
            </div>
            <div>
            <NavLink  to="/Register">
            create Account
        </NavLink>
                
            </div>
        </div>
    );
}

export default Header;
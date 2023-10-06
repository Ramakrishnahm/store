import { useState } from "react";
import { useRef } from 'react';


function Login() {
    const [login, setLogin] = useState({ email: "", password: "" });
    
    const handleChange = (ev) => {
        const { name, value } = ev && ev.target;
        setLogin((prev) => ({ ...prev, [name]: value }));
    };

    function handleSubmit(event) {
        event.preventDefault();
        console.log(login);
        setLogin({ password: "", email: "" });
    }

    return (
        <div className="login">
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label id="email">Email</label> <br />
                    <input
                        type="email"
                        name="email"
                        value={login.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label id="password">Password</label> <br />
                    <input
                        type="password"
                        name="password"
                        value={login.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <button className="btnlogin btn">LOGIN</button>
                </div>
                <div>
                    <button className="btnguest btn">GUEST USER</button>
                </div>
                <p>
                    Not a member yet?<a href="#">Register</a>
                </p>
            </form>
        </div>
    );
}

export default Login;

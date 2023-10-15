import { useState } from "react";

import axios from 'axios'


function Register() {
  const [login, setLogin] = useState({ username: "", email: "", password: "" });
  const handleChange = (ev) => {
    const { name, value } = ev && ev.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(login);
    setLogin({ username: "", password: "", email: "" });
  }

  const tryLogin = ({ email, password, username }) => {
    axios
      .post("https://strapi-store-server.onrender.com/api/auth/local/register ", {
        username:username,
        identifier: email,
        password: password,
      })
      .then((res) => {
        setLogin({ email: "", password: "" });
        localStorage.setItem("user", JSON.stringify(res.data));
        console.log(email)
        
      });
  };
  const handleGuestLogin1 = () => {
    tryLogin({ email: "test@test.com", password: "secret" });
  };

  return (
    <div className="login">
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label id="name">Username</label> <br />
          <input
            type="text"
            name="username"
            value={login.username}
            onChange={handleChange}
            required
          />
        </div>

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
          <button type="button" className="btnlogin btn" onClick = {handleGuestLogin1}>
            REGISTER
          </button>
        </div>
        <p></p>
      </form>
    </div>
  );
}

export default Register;

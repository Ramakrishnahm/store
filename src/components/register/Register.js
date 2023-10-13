import { useState } from "react";
// import { Link } from 'react-router-dom';

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
          <button type="button" className="btnlogin btn">
            REGISTER
          </button>
        </div>
        <p></p>
      </form>
    </div>
  );
}

export default Register;

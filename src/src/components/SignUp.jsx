import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import "./SignUp.css";

function SignUp() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const handleSubmit = async (event) => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    event.preventDefault();

    const response = await axios.post(`${baseUrl}/signup`, {
      firstname: firstName,
      lastname: lastName,
      email: email,
      username: userName,
      password: password,
    });

    if (response.data._id) {
      setFirstName("");
      setLastName("");
      setEmail("");

      setUserName("");
      setPassword("");
      setMessage(null);
      navigate("/login");
    } else {
      setMessage("Ocurrió un error. Intente nuevamente");
      setFirstName("");
      setlastName("");
      setEmail("");

      setUserName("");
      setPassword("");
    }
  };

  return (
    <div>
      <div className="container d-flex align-items-center register_back">
        <div className="row wrapper_sign">
          <div className="col p-5">
            <h2 className="text-center title">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <span className="icon "></span>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  required
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                />
                <label>
                  <ion-icon name="person-outline"></ion-icon>First Name
                </label>
              </div>

              <div className="input-box">
                <span className="icon"></span>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  required
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                />
                <label>
                  <ion-icon name="person-outline"></ion-icon>Last Name
                </label>
              </div>

              <div className="input-box">
                <span className="icon"></span>
                <input
                  type="text"
                  name="username"
                  id="username"
                  required
                  value={userName}
                  onChange={(event) => setUserName(event.target.value)}
                />
                <label>
                  <ion-icon name="person-outline"></ion-icon>Username
                </label>
              </div>

              <div className="input-box">
                <span className="icon"></span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <label>
                  <ion-icon name="mail-outline"></ion-icon>Email
                </label>
              </div>

              <div className="input-box">
                <span className="icon"></span>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <label>
                  <ion-icon name="lock-closed-outline"></ion-icon>Password
                </label>
              </div>

              {message && <Alert variant={"warning"}>{message}</Alert>}

              <div className="remember-forgot ">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>
                <a href="#">Forgot your password?</a>
              </div>
              <button type="submit" className="boton mt-2">
                Sign Up
              </button>
              <div className="login-register">
                <p>
                  Already have an account?
                  <NavLink to="/login" className="register-link ps-3">
                    Login!
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

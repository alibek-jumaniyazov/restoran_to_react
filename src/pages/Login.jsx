import React, { useState } from 'react';
import "../styles/login.css"
import LogoName from '../images/Group 152.svg'

function Login() {
  const [name, setName] = useState("");
  const [password1, setPassword1] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === "" || password1.trim() === "" || password.trim() === "") {
      alert("Please fill in all fields.");
    }
     if (password1.length < 8) {
      alert("Password must be at least 8 characters.");
    }  else if (password != password1) {
      alert("Parollar bir biri bilan teng emas  "); 
     } else {
      console.log("Name:", name);
      console.log("Password", password1);
      console.log("Password:", password);

      // submit the form
    }
  };

  return (
    <form onSubmit={handleSubmit}>

    <p className='loginLogo'  >Register</p>

      <div class="inputGroup">
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          autocomplete="off"
          onChange={(event) => setName(event.target.value)}
          required
        />
        <label for="name">Name</label>
      </div>


      <div class="inputGroup">
      <input
          type="password"
          id="password"
          name="password"
          value={password1}
          autocomplete="off"
          onChange={(event) => setPassword1(event.target.value)}
          minLength={8}
          required
        />
        <label for="name">Password</label>
      </div>
      <div class="inputGroup">
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          autocomplete="off"
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <label for="name">Password</label>
      </div>
      <button className='btnLogin' type="submit">Register</button>
    </form>
  );
}

export default Login;
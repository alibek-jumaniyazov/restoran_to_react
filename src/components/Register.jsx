import React, { useState } from 'react';
import "../styles/login.css"
import LogoName from '../images/Group 152.svg'

function Register({setRegister}) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === ""  || password.trim() === "") {
      alert("Please fill in all fields.");
    }
    if (password.length < 9) {
      alert("Password must be at least 9 characters.");

    }
  };
        function nextPage(){
            if (password.length == 9 && name.trim() != "") {
                setRegister("true")
              }
        }
  return (
    <form onSubmit={handleSubmit}>

<h1 className="registerTitle">Вход в аккаунт</h1>


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
        {/* <p>Номер телефона</p> */}
        <input
          type="tel"
          id="tel"
          name="tel"
          value={password}
          autocomplete="off"
          onChange={(event) => setPassword(event.target.value)}
          required
          minLength={9}
        />
        <label for="name">+998</label>
      </div>
      <button onClick={() => nextPage()} className='btnLogin' type="submit">Register</button>
      <a onClick={() => setRegister("true")}>login</a>
    </form>
  );
}

export default Register;
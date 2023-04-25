import React, { useState } from 'react';
import "../styles/login.css"

function Login({setRegister}) {
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password.trim() === "") {
      alert("Please fill in all fields.");
    }
    if (password.length > 9) {
      alert("Password must be at least 9 characters.");
    } else {
      // submit the form
    }
  };

  return (
    <form onSubmit={handleSubmit}>


      <h1 className="registerTitle">Вход в аккаунт</h1>
      <span>Сможете быстро оформлять заказы,
        использовать бонусы</span>

      <div class="inputGroup">
        <p>Номер телефона</p>
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
      <button className='btnLogin' type="submit">Войти</button>
      <p onClick={() => setRegister("false")}>Registratsiya</p>
      <p className='loginFootertext'>Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и пользовательским соглашением</p>
    </form>
  );
}

export default Login;
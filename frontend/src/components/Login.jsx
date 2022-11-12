import React from 'react';
import { useState } from "react";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(evt) {
    setEmail(evt.target.value);
  }

  function handlePassword(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.handleLogin(email, password);
  }

  return (
    <section className="login">
      <h2 className="login__title">Вход</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <input className="login__input" type="email" placeholder="Email" value={email} onChange={handleEmail} required/>
        <input className="login__input" type="password" placeholder="Пароль" value={password} autoComplete="on" onChange={handlePassword} required/>
        <button className="login__button" type="submit">Войти</button>
      </form>
    </section>
  );
}

export default Login;
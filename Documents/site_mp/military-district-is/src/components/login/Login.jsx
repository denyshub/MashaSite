import React, { useState } from 'react';
import './Login.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логіка входу тут
    console.log({ email, password });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Вхід до системи</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="email">Електронна пошта</label>
            <input
              type="email"
              id="email"
              placeholder="Введіть електронну пошту"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              placeholder="Введіть пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Увійти
          </button>
        </form>
        <div className="login-footer">
          <p>
            <a href="/forgot-password">Забули пароль?</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

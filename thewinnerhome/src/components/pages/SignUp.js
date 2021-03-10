import React from 'react';
import './signUp.css';

export default function SignUp() {
  return (

    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">
          <img src="/images/logo1.jpg" id="icon" alt="User Icon" />
          <h1>Login</h1>
        </div>
        {/* Login Form */}
        <form>
          <input type="text" id="login" className="fadeIn second" name="login" placeholder="username" />
          <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
          <input type="submit" className="fadeIn fourth" defaultValue="Log In" />
        </form>
        {/* Remind Passowrd */}
        <div id="formFooter">
          <a className="underlineHover" href="/pages/inscrit.js">Creat account</a>
        </div>
      </div>
    </div>
  );
}

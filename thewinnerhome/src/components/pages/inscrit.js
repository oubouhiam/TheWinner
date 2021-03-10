import React from 'react';
import './inscrit.css.css';

export default function SignUp() {
  return (

    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">
          <img src="/images/logo1.jpg" id="icon" alt="User Icon" />
          <h1>SignUp</h1>
        </div>
        {/* Login Form */}
        <form>
          <input type="text" id="Name" className="fadeIn second" name="login" placeholder="Name" />
          <input type="text" id="Email" className="fadeIn second" name="login" placeholder="Email" />
          <input type="text" id="login" className="fadeIn second" name="login" placeholder="username" />
          <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
          <input type="submit" className="fadeIn fourth" defaultValue="Sign Up" />
        </form>
        {/* Remind Passowrd */}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import "../CSS/loginSignup.css";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login Function Executed", formData);

    let responseData;
    await fetch(`${process.env.REACT_APP_API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: formData.email, password: formData.password })
    })
      .then((response) => response.json())
      .then((data) => responseData = data);

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  const signup = async () => {
    console.log("Signup Function Executed", formData);

    let responseData;
    await fetch(`${process.env.REACT_APP_API_BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
  username: formData.username,
  email: formData.email, 
  password: formData.password
  
})

    })
      .then((response) => response.json())
      .then((data) => responseData = data);

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <div className='login-signup'>
      <div className='login-signup-container'>
        <h1>{state}</h1>
        <div className='login-signup-fields'>
          {state === "Sign Up" &&
            <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' />
          }
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
        </div>

        <button onClick={() => { state === "Login" ? login() : signup() }}>Continue</button>
        {state === "Sign Up" ?
          <p className="login-signup-login">Already have an account? <span onClick={() => { setState("Login") }}>Login here!</span></p>
          :
          <p className="login-signup-login">Create an account? <span onClick={() => { setState("Sign Up") }}>Click here!</span></p>
        }
        <div className="login-signup-agree">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

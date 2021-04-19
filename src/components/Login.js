import React, { useState } from "react";
import { useHistory } from "react-router";
import {axiosWithAuth} from "../helpers/axiosWithAuth";

const Login = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    error: ""
  })

  const history = useHistory()

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const handleSubmit = e => {
    e.preventDefault()
    axiosWithAuth()
      .post('/api/login', formValues)
      .then((res) => {
        console.log(res)
        localStorage.setItem('token', res.data.payload)
        history.push('/colors')
      })
      .catch(err => {
        console.log(err)
        setFormValues({...formValues, error: "Username or Password is not valid"})
      })
  }

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={handleSubmit}>
          <input data-testid="username" 
            type='text'
            name='username'
            placeholder='Username'
            onChange={handleChange}
            />
          <input data-testid="password" 
            type='password'
            name='password'
            placeholder='Password'
            onChange={handleChange}         
          />
          <button>Log In</button>
        </form>
      </div>

      <p style={{color: 'red'}} data-testid="errorMessage" className="error">{formValues.error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
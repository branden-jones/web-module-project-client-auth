import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
 
 const Login = () => {
    let navigate = useNavigate();
    const [ cred, setCred ] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setCred({
            ...cred,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:9000/api/login', cred)
             .then((res) => {
                localStorage.setItem('token', res.data.token);
                navigate('/friends');
             })
             .catch((err) => console.log(`WHY API WHY?!?!?!?!`, err))
    }
 
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor='username'>Username:</label>
            <input id='username' name='username' onChange={handleChange} />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' name='password' onChange={handleChange} />
          </div>
          <button onClick={() => onSubmit()}>Submit</button>
        </form>
      </div>
      )
  }

  export default Login;
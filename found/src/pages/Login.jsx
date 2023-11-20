import React, { useContext, useState } from 'react';
import './css/login.css';
import { AuthContext } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const {login} = useContext(AuthContext);
  const [err,setErr] = useState();
  const [inputs,setInputs] = useState({
    username: "",
    password: ""
  });

  const navigate = useNavigate();
  const handlChange = (e) =>{
    setInputs((prev)=>({...prev,[e.target.name]:e.target.value}))
    setErr(null)
  }
  const handlSumbit = async (e) =>{
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/adminpage")
    } catch (err) {
      setErr(err.message)
    }
  }
  return (
    <div className='login'>
      <form className="formCard">
        <div className="cardHeader">
          <h1 className="fordHeading">Logo Sign in</h1>
        </div>
        <div className="field">
          <label htmlFor="username">Username</label>
          <input className="input" name="username" type="text" placeholder="Username" id="username" onChange={handlChange} />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            className="input"
            name="password"
            type="password"
            placeholder="Password"
            id="password"
            onChange={handlChange}
          />
        </div>
        <div className="field">
          <button onClick={handlSumbit} type="submit" className="button">
            Login
          </button>
        </div>
      </form>
      {err && <p style={{ color: "red" }}>{err}</p>}
    </div>
  );
};

export default Login;

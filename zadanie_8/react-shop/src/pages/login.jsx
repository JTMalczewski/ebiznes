import React, { useContext, useEffect, useState } from 'react';
import { ProdContext } from '../router';
import { Link } from "react-router-dom";
import './login.css';
import axios from "axios";


export default function Login() {
    const baseURL = "http://localhost:3001";
    const [credentials, setCredentials] = useState({ login: "", password: "" })
    const [token, setToken] = useState("");

    function login() {
        axios.get(baseURL + `/login?login=${credentials.login}&password=${credentials.password}`)
            .then((response) => {
                setToken(response.data);
                console.log(response.data);
            })
    }

    function handleChange(e) {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    return (<div className='login'>
        <div className='login__container'>
            <div className='login_form'>
                <input type="text" name="login" value={credentials.login} onChange={handleChange} placeholder="Login" />
                <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" />
                <button><Link className='login_button' to="/" onClick={() => login()}>Login</Link></button>
            </div>
        </div>
    </div>)
}
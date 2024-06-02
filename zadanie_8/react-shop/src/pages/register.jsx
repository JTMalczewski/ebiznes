import React, { useContext, useEffect, useState } from 'react';
import { ProdContext } from '../router';
import { Link } from "react-router-dom";
import axios from "axios";
import './register.css';


export default function Register() {
    const baseURL = "http://localhost:3001";
    const [credentials, setCredentials] = useState({ login: "", password: "" });

    function register() {
        axios.get(baseURL + `/register?login=${credentials.login}&password=${credentials.password}`)
            .then((response) => {
                console.log(response.data);
            })
    }
    
    function handleChange(e) {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    return (<div className='register'>
        <div className='register__container'>
            <div onSubmit={register} className='register__from'>
                <input type="text" name="login" value={credentials.login} onChange={handleChange} placeholder="Login" />
                <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" />
                <button><Link className='register_button' to="/" onClick={() => register()}>Register</Link></button>
            </div>
        </div>
    </div>)
}
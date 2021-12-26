import React from "react";
import './Login.css'
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="login-container">
            <div className="wrapper">
                <form className="login__form">
                    <label>Username</label>
                    <input type="text" placeholder="Please enter your username..." />
                    <label>Password</label>
                    <input type="password" placeholder="Please enter your password..."/>
                    <button className="login__form-button">Login</button>
                </form>
                <Link className="link" to={"/register"}>
                    <span className="register__link">Don't have account? Sign Up</span>
                </Link>
            </div>
        </div>
    );
}

export default Login;

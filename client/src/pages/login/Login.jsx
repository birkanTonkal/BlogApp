import React from "react";
import './Login.css'

function Login() {
    return (
        <div className="login-container">
            <div className="wrapper">
                <form className="login__form">
                    <label>Email</label>
                    <input type="text" placeholder="Please enter your mail..." />
                    <label>Password</label>
                    <input type="password" placeholder="Please enter your password..."/>
                    <button className="login__form-button">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;

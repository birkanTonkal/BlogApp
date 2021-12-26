import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import {  useState, useRef } from "react";
import axios from "axios";

function Register() {
    const [message, setMessage] = useState("");
    let email = useRef();
    let username = useRef();
    let password = useRef();

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const register = await axios.post("/auth/register", {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            });
            register.data && window.location.replace("/login");
        } catch (e) {
            setMessage(e.response.data);
        }
    };
    return (
        <div className="register-container">
            <div className="wrapper">
                {message && <h4 className="error__message">{message}</h4>}
                <form className="register__form" onSubmit={submitHandler}>
                    <div className="register__form-email">
                        <label>Email</label>
                        <input
                            type="text"
                            placeholder="Please enter your mail..."
                            ref={email}
                        />
                    </div>
                    <div className="register__form-username">
                        <label>Username</label>
                        <input
                            type="text"
                            placeholder="Please enter your username..."
                            ref={username}
                        />
                    </div>
                    <div className="register__form-password">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Please enter your password..."
                            ref={password}
                        />
                    </div>
                    <div className="register__form-buttons">
                        <div className="register__form-button">
                            <button>Register</button>
                        </div>
                        <Link className="link" to={"/login"}>
                            <span className="login__link">
                                Do you have account? Login
                            </span>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;

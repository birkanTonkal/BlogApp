import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import {  useState, useRef } from "react";
import axios from "axios";

function Register() {
    const [error, setError] = useState("");
    let email = useRef();
    let username = useRef();
    let password = useRef();

    const submitHandler = async (e) => {
        e.preventDefault();
        let name = username.current.value;
        let mail = email.current.value;
        let parole = password.current.value;
        try {
            const register = await axios.post("/auth/register", {
                username: name,
                email: mail,
                password: parole 
            });
            register.data && window.location.replace("/login");
        } 
        catch (e) {
            if(name === "" || mail === "" || parole === "") {
                setError("You can't sign without information :(")
            }
            else if (e.response.status === 401) {
                setError(e.response.data);
            }
            else {
                setError("WE ARE IN MAINTENANCE");
            }
            
        }
    };
    return (
        <div className="register-container">
            <div className="wrapper">
                
                <form className="register__form" onSubmit={submitHandler}>
                {error && <p className="error">&#9888;&nbsp;{error}</p>}
                    <div className="register__form--email">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="me@example.com" required
                            ref={email}
                        />
                    </div>
                    <div className="register__form--username">
                        <label>Username</label>
                        <input
                            type="text"
                            placeholder="Please enter your username..."
                            ref={username}
                        />
                    </div>
                    <div className="register__form--password">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Please enter your password..."
                            ref={password}
                        />
                    </div>
                    <div className="register__form--buttons">
                        <div className="register__form--button">
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

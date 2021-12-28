import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import { AuthContext } from "../../helpers/Context/AuthContext";
import { useContext, useState } from "react";

function Login() {
    let username = useRef();
    let password = useRef();
    const [error, setError] = useState();
    const { dispatch } = useContext(AuthContext);
    let submitHandler = async (e) => {
        e.preventDefault();
        try {
            const userData = await axios.post("/auth/login", {
                username: username.current.value,
                password: password.current.value,
            });
            dispatch({ type: "LOGIN_SUCCESS", payload: userData.data });
            window.location.replace("/");
        } catch (e) {
            if (
                username.current.value === "" ||
                password.current.value === ""
            ) {
                setError("I can't let you without information :(");
                dispatch({ type: "LOGIN_FAILURE", error: e.response.data });
            } else if (e.response.status === 400) {
                setError(e.response.data);
                dispatch({ type: "LOGIN_FAILURE", error: e.response.data });
            } else {
                dispatch({ type: "LOGIN_FAILURE", error: e.response.data });
                setError("WE ARE IN MAINTENANCE")
            }
        }
    };

    return (
        <div className="login-container">
            <div className="wrapper">
                
                <form className="login__form" onSubmit={submitHandler}>
                    {error && <p className="error">&#9888;&nbsp;{error}</p>}
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Please enter your username..."
                        ref={username}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Please enter your password..."
                        ref={password}
                    />
                    <button className="login__form--button">Login</button>
                    <Link className="link" to={"/register"}>
                        <span className="register__link">
                            Don't have account? Sign Up
                        </span>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Login;

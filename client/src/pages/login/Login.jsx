import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import { AuthContext } from "../../helpers/Context/AuthContext";
import { useContext } from "react";

function Login() {
    let username = useRef();
    let password = useRef();

    const { dispatch } = useContext(AuthContext);
    let submitHandler = async (e) => {
        e.preventDefault();
        try {
            const userData = await axios.post("/auth/login", {
                username: username.current.value,
                password: password.current.value,
            });
            dispatch({ type: "LOGIN_SUCCESS", payload: userData.data });
        } catch (e) {
            dispatch({ type: "LOGIN_FAILURE", error: e.response.data });
        }
    };

    return (
        <div className="login-container">
            <div className="wrapper">
                <form className="login__form" onSubmit={submitHandler}>
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
                    <button className="login__form-button">Login</button>
                </form>
                <Link className="link" to={"/register"}>
                    <span className="register__link">
                        Don't have account? Sign Up
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default Login;

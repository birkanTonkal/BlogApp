import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../helpers/Context/AuthContext";

function Navbar() {
    const { account, dispatch } = useContext(AuthContext);
    return (
        <div className="navbar-container">
            <div className="wrapper">
                <div className="nav">
                    <div className="nav__item">
                        {logoAndTitle}
                        {navMenu(account, dispatch)}
                    </div>
                </div>
            </div>
        </div>
    );
}
const logoAndTitle = (
    <div className="nav__logo">
        <svg
            className="nav__logo--cloud"
            data-bbox="0 0 348.346 212.916"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 348.346 212.916"
            aria-hidden="true"
        >
            <path d="M347.779 150.733c-3.759-26.573-25.041-43.354-49.967-46.302.207-2.561.31-5.157.31-7.775C298.121 43.275 254.845 0 201.46 0c-41.16 0-76.309 25.732-90.25 61.981-15.592-7.006-33.435-9.102-50.824-4.899C25.351 65.549 0 97.88 0 133.896c0 46.834 39.167 79.02 83.868 79.02h206.53c33.755 0 62.368-26.981 57.381-62.183z" />
        </svg>
        <img
            className="nav__logo--ballon"
            src="https://static.wixstatic.com/media/41d000_609d3d052aa2455f99274f3bb75a157e.png/v1/fill/w_116,h_187,al_c,q_85,usm_0.66_1.00_0.01/41d000_609d3d052aa2455f99274f3bb75a157e.webp"
            alt=""
        />
        <div className="nav__title">
            <h2>
                BLOG <pre>FOR</pre> EVERYONE
            </h2>
        </div>
    </div>
);
function navMenu(account, dispatch) {
    return (
        <div className="nav__item--container">
            <ul className="nav__item--list">
                <li className="nav__item--home">
                    <Link className="link" to="/">
                        <p>HOME</p>
                    </Link>
                </li>
                <li className="nav__item--write">
                    <Link className="link" to="/write">
                        <p>WRITE</p>
                    </Link>
                </li>
                <li className="nav__item--register">
                    <Link className="link" to="/register">
                        <p>REGISTER</p>
                    </Link>
                </li>
                <li className="nav__item--login">
                    {loginChanges(account, dispatch)}
                </li>
            </ul>
        </div>
    );
}

function loginChanges(account, dispatch) {
    const showDropDown = () => {
        let dropDown = document.getElementsByClassName("nav__item--dropdown")[0]
            .style;

        if (dropDown.display === "block") {
            dropDown.display = "none";
        } else {
            dropDown.display = "block";
        }
    };
    let logoutHandler = () => {
        dispatch({ type: "LOGOUT" });
    };
    if (account !== null) {
        return (
            <div className="nav__item--login-container">
                <div className="nav__item--loginImg" onClick={showDropDown}>
                    <img
                        src={"http://localhost:5000/images/" + account.image}
                        alt=""
                        className="nav__item--loginPicture"
                    />
                </div>
                <div className="nav__item--dropdown">
                    <ul className="nav__item--dropdownMenu">
                        <li>
                            <Link className="link" to="/profile">
                                <p>Profile</p>
                            </Link>
                        </li>

                        <li>
                            <Link className="link" to="/stats">
                                <p>Statistics</p>
                            </Link>
                        </li>
                        <li onClick={logoutHandler}><p>Logout</p></li>
                    </ul>
                </div>
            </div>
        );
    } else {
        return (
            <Link className="link" to="/login">
                <div className="nav__item--login-container">
                    <p>LOGIN</p>
                </div>
            </Link>
        );
    }
}

export default Navbar;

import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import SinglePost from "./pages/single-post/SinglePost";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Statistic from "./pages/stats/Statistic";
import { AuthContext } from "./helpers/Context/AuthContext";
import {useContext} from "react";




function App() {
    const {account} = useContext(AuthContext);
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post/:postId" element={<SinglePost />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/write" element={account ? <Write /> : <Login />} />
                <Route path="/profile" element = {account ? <Profile /> : <Login />} />
                <Route path="/stats" element = {account ? <Statistic /> : null} />
            </Routes>
        </Router>
    );
}

export default App;

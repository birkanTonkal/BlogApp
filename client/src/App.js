import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import SinglePost from "./pages/single-post/SinglePost";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Register from "./pages/register/Register";


function App() {
    const user = true;
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post/:postId" element={<SinglePost />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/write" element={user ? <Write /> : <Login />} />
            </Routes>
        </Router>
    );
}

export default App;

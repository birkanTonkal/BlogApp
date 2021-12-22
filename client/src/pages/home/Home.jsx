import React from "react";
import "./Home.css";
import Post from "../../components/post/Post";

function Home() {
    return (
        <div className="home-container">
            <div className="wrapper">
                <div className="posts">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        </div>
    );
}

export default Home;

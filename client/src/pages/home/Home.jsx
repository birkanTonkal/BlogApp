import React from "react";
import "./Home.css";
import Post from "../../components/post/Post";
import axios from "axios"
import {useEffect, useState} from "react"
import { nanoid } from 'nanoid'
import { useLocation } from "react-router";

function Home() {
    const [allPosts, setAllPosts] = useState([]);
    let authorQuery = useLocation();
    useEffect(() => {
        const fetchAllPosts = async () => {
            const fetchPosts = await axios.get("/post" + authorQuery.search);
            setAllPosts(fetchPosts.data);
        }
        fetchAllPosts();
    }, [authorQuery])
    return (
        <div className="home-container">
            <div className="wrapper">
                <div className="posts">
                    {allPosts.map((postData, index) => {
                        return <Post key={nanoid()} post = {postData}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Home;

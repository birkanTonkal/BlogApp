import React from "react";
import "./SinglePost.css";
import axios from "axios";
import { useState, useEffect } from "react";

function SinglePost() {
    
    const [post, setPost] = useState({});
    useEffect(() => {
        const fetchPost = async function () {
            let postId = window.location.pathname.split("/")[2];
            const fetchPost = await axios.get("/post/" + postId);
            setPost(fetchPost.data)
        };
        fetchPost()
    }, []);
    console.log(post.title)
    return (
        <div className="singlePost-container">
            <div className="wrapper">
                <div className="singlePost">
                    <div className="singlePost__title">
                        <h3>{post.title}</h3>
                    </div>
                    <div className="singlePost__content">
                        <div className="singlePost__content-img">
                            <img
                                src="https://static.wixstatic.com/media/2dfd3c34fef146579660cab4600ebd10.jpg/v1/fill/w_740,h_562,al_c,q_90/2dfd3c34fef146579660cab4600ebd10.webp"
                                alt=""
                            />
                        </div>
                        <div className="singlePost__content-text">
                            <p>
                                {post.content}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="comments">
                    <div className="comments__title">
                        <h3>Comments:</h3>
                    </div>
                    <div className="comments__area">
                        <textarea
                            placeholder="You can comment here..."
                            rows="10"
                            cols="100"
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SinglePost;

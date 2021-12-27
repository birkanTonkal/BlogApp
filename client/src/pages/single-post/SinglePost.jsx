import React from "react";
import "./SinglePost.css";
import axios from "axios";
import { useState, useEffect, useContext, useRef } from "react";
import { AuthContext } from "../../helpers/Context/AuthContext";

function SinglePost() {
    const [post, setPost] = useState({});
    const [update, setUpdate] = useState(true);
    const { account } = useContext(AuthContext);
    let title = useRef();
    let content = useRef();
    useEffect(() => {
        const fetchPost = async function () {
            let postId = window.location.pathname.split("/")[2];
            const fetchPost = await axios.get("/post/" + postId);
            setPost(fetchPost.data);
        };
        fetchPost();
    }, [update]);

    const deleteHandler = async () => {
        try {
            await axios.delete("/post/" + post._id, {
                data: { username: account.username },
            });
            window.location.replace("/");
        } catch (e) {
            console.log(e);
        }
    };
    const updateHandler = async () => {
        try {
            await axios.put("/post/" + post._id, {
                username: account.username,
                title : title.current.value,
                content : content.current.value
            })
            setUpdate(true);
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="singlePost-container">
            <div className="wrapper">
                <div className="singlePost">
                    {update ? (
                        <div className="singlePost__title">
                            <h3>{post.title}</h3>
                        </div>
                    ) : (
                        <input
                            className="singlePost__updateTitle"
                            type="text"
                            placeholder="Write your title..."
                            ref={title}
                        />
                    )}

                    <div className="singlePost__content">
                        <div className="singlePost__content-img">
                            <img
                                src={
                                    "http://localhost:5000/images/" + post.image
                                }
                                alt=""
                            />
                        </div>
                        {post.username === account?.username && (
                            <div className="singlePost__content--icons">
                                <i
                                    className="fas fa-pen-square"
                                    onClick={(e) => {
                                        setUpdate(false);
                                    }}
                                ></i>
                                <i
                                    className="far fa-trash-alt"
                                    onClick={deleteHandler}
                                ></i>
                            </div>
                        )}
                        {update ? (
                            <div className="singlePost__content-text">
                                <p>{post.content}</p>
                            </div>
                        ) : (
                            <div className="singlePost__update--text">
                                <textarea
                                    className="singlePost__update--textArea"
                                    placeholder="Write your blog..."
                                    autoFocus= {true}
                                    ref={content}
                                    defaultValue={post.content}
                                ></textarea>
                            </div>
                        )}
                        {!update && (
                            <div className="singelPost__updateButton">
                                <button
                                    className="singelPost__updateButton"
                                    type="submit"
                                    onClick={updateHandler}
                                >
                                    UPDATE
                                </button>
                            </div>
                        )}
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

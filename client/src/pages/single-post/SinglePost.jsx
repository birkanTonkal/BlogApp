import React from "react";
import "./SinglePost.css";
import axios from "axios";
import { useState, useEffect, useContext, useRef } from "react";
import { AuthContext } from "../../helpers/Context/AuthContext";
import { nanoid } from "nanoid";

function SinglePost() {
    const [post, setPost] = useState({});
    const [update, setUpdate] = useState(true);
    const [writeComment, setWriteComment] = useState(false);
    const { account } = useContext(AuthContext);
    let title = useRef();
    let content = useRef();
    let comment = useRef();
    let date = new Date();

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
                title: title.current.value,
                content: content.current.value,
            });
            setUpdate(true);
        } catch (e) {
            console.log(e);
        }
    };

    const commentHandler = async () => {
        try {
            await axios.put("/post/comment/" + post._id, {
                username: account.username,
                comment: comment.current.value,
                date: date,
            });
            window.location.replace("/post/" + post._id);
        } catch (e) {
            console.log(e);
        }
    };

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
                            autoFocus={true}
                            defaultValue={post.title}
                        />
                    )}

                    <div className="singlePost__content">
                        <div className="singlePost__content--img">
                            <img
                                src={post.image !== "" ? "http://localhost:5000/images/" + post.image : "http://localhost:5000/images/defaulback.jpg"}
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
                            <div className="singlePost__content--text">
                                <p>{post.content}</p>
                            </div>
                        ) : (
                            <div className="singlePost__update--text">
                                <textarea
                                    className="singlePost__update--textArea"
                                    placeholder="Write your blog..."
                                    autoFocus={true}
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
                <div className="comments__container">
                    <div className="comments__title">
                        <h3>Comments:</h3>
                        {account && (
                            <button
                                onClick={(e) => {
                                    setWriteComment(true);
                                }}
                            >
                                Write a comment
                            </button>
                        )}
                    </div>

                    {post.comments &&
                        post.comments.map((comment) => {
                            return (
                                <div className="comments" key={nanoid()}>
                                    <div className="comments__user">
                                        <p>&nbsp;{comment.username}</p>
                                        <span>
                                            {new Date(
                                                comment.date
                                            ).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <div className="comments__content">
                                        <p>&nbsp;{comment.comment}</p>
                                    </div>
                                </div>
                            );
                        })}
                    {writeComment && (
                        <div className="comments__area">
                            <textarea
                                placeholder="You can comment here..."
                                rows="10"
                                cols="100"
                                ref={comment}
                                autoFocus={true}
                            ></textarea>
                            <div className="comments__button">
                                <button onClick={commentHandler}>
                                    COMMENT
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SinglePost;

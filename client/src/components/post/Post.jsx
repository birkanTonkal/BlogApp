import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";
function Post({ post }) {
    return (
        <div className="post-container">
            <div className="post">
                <div className="post__img">
                    <img
                        src={post.image !== "" ? "http://localhost:5000/images/" + post.image : "http://localhost:5000/images/defaulback.jpg"}
                        alt=""
                    />
                </div>
                <div className="post__content">
                    <Link className="link" to={`/?user=${post.username}`}>
                        <div className="post__content--author">
                            <span>Author:{post.username}</span>
                        </div>
                    </Link>
                    <Link className="link" to={`/post/${post._id}`}>
                        <div className="post__content--title">
                            <h3>{post.title}</h3>
                        </div>
                    </Link>
                    <Link className="link" to={`/post/${post._id}`}>
                        <div className="post__content--text">
                            <p>{post.content}</p>
                        </div>
                    </Link>

                    <div className="post__content--stats">
                        <div className="post__content--stats-views">
                            <p>Views:{post.viewCount}</p>
                            
                        </div>
                        <div className="post__content--stats-comments">
                        <p>Comments:{post.comments.length}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;

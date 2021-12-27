import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";
function Post({ post }) {
    return (
        <div className="post-container">
            <div className="post">
                <div className="post__img">
                    <img
                        src={"http://localhost:5000/images/"+ post.image}
                        alt=""
                    />
                </div>
                <div className="post__content">
                    <Link className="link" to={`/?user=${post.username}`}>
                        <div className="post__content-author">
                            <span>Author:{post.username}</span>
                        </div>
                    </Link>
                    <Link className="link" to={`/post/${post._id}`}>
                        <div className="post__content-title">
                            <h3>{post.title}</h3>
                        </div>
                    </Link>
                    <Link className="link" to={`/post/${post._id}`}>
                        <div className="post__content-text">
                            <p>{post.content}</p>
                        </div>
                    </Link>

                    <div className="post__content-stats">
                        <div className="post__content-stats-views">
                            <p>Views:{post.viewCount}</p>
                            <p>0 comments</p>
                        </div>
                        <div className="post__content-stats-likes">
                            <p>31</p>
                            <i className="fas fa-heart"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;

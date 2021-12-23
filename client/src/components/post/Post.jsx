import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";
function Post() {
    return (
        <div className="post-container">
            <div className="post">
                <div className="post__img">
                    <img
                        src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8d29yayUyMGZyb20lMjBob21lfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                        alt=""
                    />
                </div>
                <div className="post__content">
                    <div className="post__content-title">
                        <Link className="link" to="/login">
                            <h3>Outdoor cooking hacks</h3></Link>
                    </div>
                    <div className="post__content-text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eos nisi quod et. Voluptatem odit inventore
                            deserunt amet, nemo vero earum delectus tempora
                            porro obcaecati minus sed, tempore animi excepturi
                            aliquam?
                        </p>
                    </div>
                    <div className="post__content-stats">
                        <div className="post__content-stats-views">
                            <p>1478 viewes</p>
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

import React from "react";
import "./Write.css";

function Write() {
    return (
        <div className="write-container">
            <div className="wrapper">
                <form className="write__form">
                    <div className="write__form-img">
                        <img
                            src="http://www.imgworlds.com/wp-content/uploads/2015/11/IMG-Worlds-of-Adventure-Ramadan-Promotions-Image.jpg"
                            alt=""
                        />
                    </div>
                    <div className="write__form-input">
                        <label htmlFor="imgInput">
                            <i class="fas fa-folder-plus"></i>
                        </label>
                        <input
                            className="write__form-input-file"
                            type="file"
                            id="imgInput"
                        />
                        <input
                            className="write__form-input-title"
                            type="text"
                            placeholder="Write your title..."
                            autoFocus={true}
                        />
                    </div>
                    <div className="write__form-text">
                        <textarea
                            className="write__form-text-area"
                            placeholder="Write your blog..."
                            autoFocus={true}
                        ></textarea>
                        <button className="write__form-button" type="submit">
                            Create Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Write;

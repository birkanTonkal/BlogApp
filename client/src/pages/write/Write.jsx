import React from "react";
import "./Write.css";
import { useRef, useState, useContext } from "react";
import { AuthContext } from "../../helpers/Context/AuthContext";
import axios from "axios";
import { nanoid } from "nanoid";

function Write() {
    let title = useRef();
    let content = useRef();
    const [file, setFile] = useState();
    const { account } = useContext(AuthContext);
    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
            username: account.username,
            title: title.current.value,
            content: content.current.value,
        };
        if (file) {
            const data = new FormData();
            const fileName = nanoid() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPost.image = fileName;

            try {
                await axios.post("/upload", data);
            } catch (e) {
                console.log(e);
            }
        }
        try {
            const post = await axios.post("/post/write", newPost);
            
            window.location.replace("/post/" + post.data._id);
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <div className="write-container">
            <div className="wrapper">
                <form className="write__form" onSubmit={submitHandler}>
                    <div className="write__form--img">
                        {file ? <img src={URL.createObjectURL(file)} alt="" />: <img src="http://localhost:5000/images/static_write.jpg" alt=""></img>}
                    </div>
                    <div className="write__form--input">
                        <label htmlFor="imgInput">
                            <i className="fas fa-folder-plus"></i>
                        </label>
                        <input
                            className="write__form--input-file"
                            type="file"
                            id="imgInput"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                        <input
                            className="write__form--input-title"
                            type="text"
                            placeholder="Write your title..."
                            autoFocus={true}
                            ref={title}
                        />
                    </div>
                    <div className="write__form--text">
                        <textarea
                            className="write__form--text-area"
                            placeholder="Write your blog..."
                            ref={content}
                        ></textarea>
                        <button className="write__form--button" type="submit">
                            Create Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Write;

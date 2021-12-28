import React from "react";
import "./Profile.css";
import { useContext, useState, useRef } from "react";
import axios from "axios";
import { AuthContext } from "../../helpers/Context/AuthContext";
import { nanoid } from "nanoid";
function Profile() {
    const { account, dispatch } = useContext(AuthContext);
    const [file, setFile] = useState();
    const username = useRef();
    const mail = useRef();
    const submitHandler = async (e) => {
        const newProfile = {
            userId: account._id,
            username: username.current.value,
            email: mail.current.value,
        };
        e.preventDefault();
        if (file) {
            const data = new FormData();
            const fileName = nanoid() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newProfile.image = fileName;
            try {
                await axios.post("/upload", data);
            } catch (e) {
                console.log(e);
            }
        }
        try {
            await axios.put("/user/" + account._id, newProfile);
            dispatch({ type: "LOGOUT" });
        } catch (e) {
            console.log(e);
        }
    };
    const editHandler = (e) => {
        let edit = document.getElementsByClassName("user__info")[0].style;
        let userAccount =
            document.getElementsByClassName("user__profile")[0].style;
        userAccount.display = "none";
        edit.display = "flex";
    };
    return (
        <div className="profile-container">
            <div className="wrapper">
                <div className="user__profile">
                    <span className="user__profile--img">
                        <img
                            src={
                                "http://localhost:5000/images/" + account.image
                            }
                            alt=""
                        />
                    </span>
                    <div className="user__profile--name">
                        <p>
                            Your username is: <span>{account.username}</span>
                        </p>
                    </div>
                    <div className="user__profile--email">
                        <p>
                            Your email is : <span> {account.email}</span>
                        </p>
                    </div>
                    <div className="user__profile--createdAt">
                        <p>
                            Created:{" "}
                            <span>
                                {new Date(account.createdAt).toLocaleString()}
                            </span>{" "}
                        </p>
                    </div>
                    <span className="user__profile--button">
                        <button onClick={editHandler}>Edit</button>
                    </span>
                </div>
                <form className="user__info" onSubmit={submitHandler}>
                    <span className="user__img">
                         <label htmlFor="imgEdit">
                            <i className="fas fa-folder-plus">{file ? null : <span>Change Profile picture</span>}</i>
                        </label>
                        <input
                        id="imgEdit"
                            type="file"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                        {file ? <img src={URL.createObjectURL(file)} alt="" />: null}
                    </span>
                    <div className="user__name">
                        <input
                            type="text"
                            placeholder="Write your new username"
                            defaultValue={account.username}
                            ref={username}
                            
                        />
                    </div>
                    <div className="user__mail">
                        <input
                            type="text"
                            placeholder="Write your new mail"
                            defaultValue={account.email}
                            ref={mail}
                        />
                    </div>
                    <span className="user__button">
                        <button type="submit">Submit</button>
                    </span>
                </form>
            </div>
        </div>
    );
}

export default Profile;

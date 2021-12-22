import React from "react";
import "./SinglePost.css";

function SinglePost() {
    return (
        <div className="singlePost-container">
            <div className="wrapper">
                <div className="singlePost">
                    <div className="singlePost__title">
                        <h3>Title</h3>
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
                                Welcome to your blog post. Use this space to
                                connect with your readers and potential
                                customers in a way that’s current and
                                interesting. Think of it as an ongoing
                                conversation where you can share updates about
                                business, trends, news, and more. Do you have a
                                design in mind for your blog? Whether you prefer
                                a trendy postcard look or you’re going for a
                                more editorial style blog - there’s a stunning
                                layout for everyone. You’ll be posting loads of
                                engaging content, so be sure to keep your blog
                                organized with Categories that also allow
                                visitors to explore more of what interests them.
                                Create Relevant Content Writing a blog is a
                                great way to position yourself as an authority
                                in your field and captivate your readers’
                                attention. Do you want to improve your site’s
                                SEO ranking? Consider topics that focus on
                                relevant keywords and relate back to your
                                website or business. You can also add hashtags
                                (#vacation #dream #summer) throughout your posts
                                to reach more people, and help visitors search
                                for relevant content. Blogging gives your site a
                                voice, so let your business’ personality shine
                                through. Choose a great image to feature in your
                                post or add a video for extra engagement. Are
                                you ready to get started? Simply create a new
                                post now.
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

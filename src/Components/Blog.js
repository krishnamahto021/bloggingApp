import React, { useEffect } from "react";

// Blogging App using Hooks
export default function Blog(props) {
    let { form, setForm, blogs, setBlogs } = props;

    function handleSubmit(e) {
        e.preventDefault();
        setForm({ title: "", content: "" }); // Clear the form state
        setBlogs([{ title: form.title, content: form.content }, ...blogs]);
    }

    function deleteBlog(i){
        // const updatedData = [...blogs];
        // updatedData.splice(i,1);
        // setBlogs(updatedData); 
        
        setBlogs(blogs.filter((blog,index)=>i!==index));
    }


    return (
        <>
            <h1>Write a Blog!</h1>

            <div className="section">
                <form onSubmit={handleSubmit}>
                    <Row label="Title">
                        <input
                            className="input"
                            placeholder="Enter the Title of the Blog here.."
                            value={form.title}
                            onChange={(e) => setForm({ title: e.target.value, content: form.content })}
                            required
                        />
                    </Row>

                    <Row label="Content">
                        <textarea
                            className="input content"
                            placeholder="Content of the Blog goes here.."
                            value={form.content}
                            onChange={(e) => setForm({ title: form.title, content: e.target.value })}
                            required
                        />
                    </Row>

                    <button className="btn">ADD</button>
                </form>
            </div>

            <hr />

            <h2>Blogs</h2>
            {blogs.map((blog, i) => (
                <div className="blog" key={i}>
                    <h3>{blog.title}</h3>
                    <p>{blog.content}</p>

                    <div className="blog-btn">
                        <button className="remove btn" onClick={()=>deleteBlog(i)}>Delete</button>
                    </div>
                </div>
            ))}
        </>
    );
}

function Row(props) {
    const { label } = props;
    return (
        <>
            <label>{label}</label>
            <br />
            {props.children}
            <hr />
        </>
    );
}

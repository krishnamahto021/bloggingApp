import { useEffect, useRef } from "react";
import { getFirestore, collection,doc, getDocs, addDoc, setDoc } from 'firebase/firestore/lite';
import { db } from "../firebaseInit";
// Blogging App using Hooks

export default function Blog(props) {
    let { form, setForm, blogs, setBlogs } = props;
    const titleRef = useRef(null);

    useEffect(()=>{
        titleRef.current.focus(); // to focus on title at initial render
    },[]);

    // to set the title of the page
    useEffect(()=>{
        if(blogs.length){
            document.title = blogs[0].title;
        }
    },[blogs]);

    // to fetch data from database
    useEffect(()=>{
        async function fetchData(){
            const snapShot = await getDocs(collection(db,'blogs'));
            const blogs = snapShot.docs.map((doc) => {
                return {
                    id:doc.id,
                    ...doc.data() // doc.data() contains all the array using ... we extracted all the key values pairs
                }
            });
            setBlogs(blogs);
        }
        fetchData();
    },[]);

   async function handleSubmit(e) {
        e.preventDefault();
        setForm({ title: "", content: "" }); // Clear the form state        
        setBlogs([{ title: form.title, content: form.content }, ...blogs]);

        const docRef = doc(collection(db,'blogs'));

        await setDoc(docRef,{
            title:form.title,
            content:form.content
        });




        titleRef.current.focus();
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
                            ref={titleRef}
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

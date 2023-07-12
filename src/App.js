import Blog from "./Components/Blog";
import { useEffect,useState } from "react";

function App() {
  // const [{title},{setTitle,setContent}]= useState('');
  const[title,setTitle]=useState('');
  const[content,setContent]=useState('');
  const [blogs,setBlogs] = useState([]);


  return (
    <>
      <Blog title={title} setTitle={setTitle} content={content} setContent={setContent} blogs={blogs} setBlogs={setBlogs} />
    </>
  );
}

export default App;

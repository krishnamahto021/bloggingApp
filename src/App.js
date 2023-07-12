import Blog from "./Components/Blog";
import { useEffect,useState } from "react";

function App() {
  // const [{title},{setTitle,setContent}]= useState('');
  // const[title,setTitle]=useState('');
  // const[content,setContent]=useState('');
  const[form,setForm] = useState({title:'',content:''});
  const [blogs,setBlogs] = useState([]);


  return (
    <>
      <Blog form={form} setForm={setForm} blogs={blogs} setBlogs={setBlogs} />
    </>
  );
}

export default App;

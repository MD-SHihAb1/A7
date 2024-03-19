import { useEffect } from "react";
import { useState } from "react";
import Want from "../../src/components/Want/Want";
import Cook from "../../src/components/Want/Cook";




const Blogs = ({handleAddToCook}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() =>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="">
            {/* <h1 className="text-6xl">Blogs: {blogs.length}</h1> */}
            <div>
            {
          blogs?.map((blog,idx) => (
            <Want key={idx} blog={blog}
            handleAddToCook={handleAddToCook}
            ></Want>
          ))
        }
         </div>   
            <div>
            <h2 className='text-4xl'>cook:</h2>
            </div>
        </div>
    );
};




export default Blogs;
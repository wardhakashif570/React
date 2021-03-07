import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Fetch() {
    const [posts,setPost]=useState([]);

    useEffect(()=>{
        axios.get(`https://www.reddit.com/r/reactjs.json`)
        .then(res=>{
            const newPosts=res.data.data.children
            .map(obj=>obj.data)

            setPost(newPosts);
        })

        

    },[]);

    return (<div>
     <h1>React Api Fetch</h1>

     <ul>
         {posts.map(post=>(
            <li key={post.id}>{post.title}</li>
         ))}
     </ul>
     

    </div>)
}
export default Fetch;
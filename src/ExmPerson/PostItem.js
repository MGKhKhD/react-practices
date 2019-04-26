import React, { useContext, useState, useEffect } from "react";

import AuthContext from "./AuthContext";

import axios from "./axios-config/axiosJsonPlaceholder";

import classes from "./Post.module.css";

const PostItem = props => {
  const auth = useContext(AuthContext);
  const [post, setPost] = useState(null);

useEffect(()=>{
       fetchPost();
},[])

const fetchPost = async () =>{
    const index = props.match.params.id;
   try{
    const fullPost = await axios.get('/posts/' + index);
    if(!fullPost.data) throw new Error('unsuccessfull')
    setPost(fullPost.data);
   }catch(err){
       console.log(err);
   }
}

let postElm =<p>Loading...</p>;
if(post){
    postElm = (<div className={classes.Post}>
        <p className={classes.Title}>Title: {post.title}</p>
        <p
          className={classes.Author}
        >
          Author: {post.author}
        </p>
        {auth.isAuthenticated && (
          <p className={classes.Email}>Email: {post.email}</p>
        )}
        <p>{post.body}</p>
      </div>)
}
    

  return (
    <section style={{display: 'flex', justifyContent: 'center',
    width: '100%',
    margin: 'auto'}}>
        {postElm}
    </section >
  );
};

export default PostItem;

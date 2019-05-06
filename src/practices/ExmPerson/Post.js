import React, { useContext, useState, useEffect } from "react";

import AuthContext from "./AuthContext";
import DataContext from "./DataContext";

import classes from "./Post.module.css";

const Post = props => {
  const auth = useContext(AuthContext);
  const data = useContext(DataContext);
  const [user, setUser] = useState(null);

  const showAuthorInfo = id => {
    const post = data.posts[id];
    const userId = data.users.findIndex(u => u.id === post.userId);
    const user = data.users[userId];
    setUser(user);
  };

  useEffect(()=>{
    showAuthorInfo(props.post.id);
  },[])


  return (
    <div className={classes.Post}>
      <p className={classes.Title}>Title: {props.post.title}</p>
      <p
        className={classes.Author}
      >
        Author: {props.post.author}
      </p>
      {auth.isAuthenticated && (
        <p className={classes.Email}>Email: {props.post.email}</p>
      )}
      <p>{props.post.body.substring(1, 100)}...</p>
    </div>
  );
};

export default Post;

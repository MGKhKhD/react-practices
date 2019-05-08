import React, { useState, useEffect } from "react";

import axios from "axios";

const PostPage = props => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?userId=${
          props.location.search.slice("?")[1]
        }`
      )
      .then(res => res.data)
      .then(res => setPosts(res))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Posts are</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostPage;

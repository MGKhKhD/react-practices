import React from "react";

import withLoading from "../HOC/withLoading";

const DisplayPosts = props => {
  return (
    <ul>
      {props.posts.map(post => (
        <li key={post.id} onClick={() => props.handlePostClick(post)}>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default withLoading("posts")(DisplayPosts);

import React from "react";

import "./Post.css";

const post = ({ post, postClick }) => {
  const { id, title, body, user } = post;
  return (
    <article className="Post" onClick={postClick}>
      <h1>{title}</h1>
      <div className="Info">
        <div className="Author">
          <p>{user.username}</p>
          <p>{user.email}</p>
        </div>
      </div>
    </article>
  );
};

export default post;

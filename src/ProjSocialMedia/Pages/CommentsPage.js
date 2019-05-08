import React, { useState, useEffect } from "react";

import axios from "axios";

const CommentsPage = props => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${
          props.location.search.slice("?")[1]
        }/comments`
      )
      .then(res => res.data)
      .then(res => setComments(res.slice(0, 10)))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Comments are:</h1>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsPage;

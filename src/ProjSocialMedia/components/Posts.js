import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";

import axios from "axios";

import lazyMount from "../HOC/lazyMount";

import DisplayPosts from "./DisplayPosts";
// import PostPage from "../Pages/PostPage";
// import CommentsPage from "../Pages/CommentsPage";

const PostPage = lazyMount(() => import("../Pages/PostPage"));
const CommentsPage = lazyMount(() => import("../Pages/CommentsPage"));

const Posts = props => {
  const [posts, setPosts] = useState([]);
  const [navbar, setNavbar] = useState(false);
  const [post, setPost] = useState(-1);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.data)
      .then(res => {
        setPosts(res.slice(0, 4));
      })
      .catch(err => console.log(err));
  }, []);

  const postClick = post => {
    setNavbar(true);
    setPost(post);
  };

  return (
    <div>
      {navbar && (
        <React.Fragment>
          <ul>
            <li>
              <Link
                to={{
                  pathname: `${props.match.url}/user`,
                  search: "?" + post.userId
                }}
              >
                User
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `${props.match.url}/comments`,
                  search: "?" + post.id
                }}
              >
                Comments
              </Link>
            </li>
          </ul>
          <Route path={`${props.match.path}/user`} component={PostPage} />
          <Route
            path={`${props.match.path}/comments`}
            component={CommentsPage}
          />
        </React.Fragment>
      )}
      <Route
        exact
        path={props.match.path}
        render={() => (
          <DisplayPosts posts={posts} handlePostClick={postClick} />
        )}
      />
    </div>
  );
};

export default Posts;

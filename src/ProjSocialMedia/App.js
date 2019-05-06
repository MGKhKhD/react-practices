import React, { useState, useEffect } from "react";
import { Link, BrowserRouter, Route, withRouter } from "react-router-dom";

import axios from "axios";

const Home = props => <h2>Home</h2>;

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

const PostPage = props => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log(props);
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

const App = props => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/posts" component={Posts} />
    </BrowserRouter>
  );
};

export default App;

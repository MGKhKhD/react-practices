import React, { Component } from "react";
import { NavLink, BrowserRouter, Route } from "react-router-dom";

import Posts from "./Posts";
import FullPost from "../../components/FullPost/FullPost";

import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Posts</NavLink>
        </li>
        <li>
          <NavLink to="/new-post">New Post</NavLink>
        </li>
      </ul>
    </nav>
  );
};

class Blog extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
        <Route path="/:id" component={FullPost} />
      </BrowserRouter>
    );
  }
}

export default Blog;

import React from "react";
import { Link, BrowserRouter, Route } from "react-router-dom";

import Posts from "./components/Posts";

const Home = props => <h2>Home</h2>;

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

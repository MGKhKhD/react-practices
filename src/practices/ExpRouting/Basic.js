import React from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";

const Home = () => <h3>Home Page</h3>;
const About = () => <h3>About Page</h3>;
const Posts = () => <h3>Posts Page</h3>;

const NavigationBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/posts">Posts</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const App = props => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/posts" component={Posts} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

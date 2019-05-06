import React from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";

const Home = () => <h3>Home Page</h3>;
const About = () => <h3>About Page</h3>;

const Post = props => {
  const { match } = props;
  console.log(props);
  return <h4>the id is {match.params.id}</h4>;
};

const Posts = ({ match }) => {
  //const { match } = props;
  //console.log(props);
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to={`${match.url}/full-post`}>full post</NavLink>
          </li>
          <li>
            <NavLink to={`${match.url}/author`}>Author</NavLink>
          </li>
        </ul>
      </nav>
      <Route path={`${match.path}/:id`} component={Post} />
      <Route
        path={match.path}
        exact
        component={() => <h3>select the post</h3>}
      />
    </div>
  );
};

const NavigationBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              exact
              activeClassName="active-link"
              activeStyle={{
                textDecoration: "overline",
                color: "red"
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: "/about", //absolute path; the realtive path can be props.match.url+/about
                hash: "#submit",
                search: "?quick-submit=true"
              }}
            >
              About
            </NavLink>
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

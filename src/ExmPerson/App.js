import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import LazyMount from './HOC/LazyMount';


import Login from "./Login";
import AuthContext from "./AuthContext";
import NavigationBar from "./NavigationBar";
import PostItem from "./PostItem";

const LazyPersons = LazyMount(()=>{
  return import("./Persons");
})

const LazyPosts = LazyMount(()=>{
  return import("./Posts");
})

const App = props => {
  const [auth, setAuth] = useState(false);

  const handleLogin = ({email,
  idToken})=>{
    console.log(email);
    auth.email=email;
    auth.idToken=idToken;
    auth.isAuthenticated=auth.idToken? true :false;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <AuthContext.Provider
        value={{
          isAuthenticated: auth.isAuthenticated,
          login: handleLogin,
          logout: ()=>{setAuth(false)}
        }}
      >
        <BrowserRouter basename="/">
          <NavigationBar />
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/persons" component={LazyPersons} />
            <Route path="/posts" component={LazyPosts} />
            {auth && <Route path="/post/:id" component={PostItem} />}
            {!auth && <Redirect from="/post/:id" to="/" />}
          </Switch>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
};

export default App;

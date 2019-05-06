import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Todo from "./todo/Todo";
import JsanPlaceholder from "./ProjSocialMedia/App";
import NaviagationBar from "./NavigationBar";

const Home = props => <p> Home page</p>;

const Redit = props => <p>Redit example</p>;

const EventBooking = props => <p>Event booking </p>;

const App = props => {
  return (
    <BrowserRouter>
      <NaviagationBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/todo-project" component={Todo} />
        <Route path="/jsonplaceholder-project" component={JsanPlaceholder} />
        <Route path="/redit-project" component={Redit} />
        <Route path="/event-bookig" component={EventBooking} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

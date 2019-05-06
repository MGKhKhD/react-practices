import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = props => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/todo-project">Todo</Link>
        </li>
        <li>
          <Link to="/jsonplaceholder-project">JsanPlaceholder</Link>
        </li>
        <li>
          <Link to="/redit-project">Redit</Link>
        </li>
        <li>
          <Link to="/event-bookig">Event</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;

import React from "react";

const AuthContext = React.createContext({
  email: '',
  idToken: "",
  isAuthenticated: false,
  login: () => {},
  logout: () => {}
});

export default AuthContext;

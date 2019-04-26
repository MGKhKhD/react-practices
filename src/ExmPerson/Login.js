import React, {useContext} from 'react';
import {Redirect} from 'react-router-dom';
import AuthContext from "./AuthContext";

const Login = (props) => {
    const auth=useContext(AuthContext);

    const elm =  auth.isAuthenticated?  <Redirect to="/posts"/>:  null;
    
    return (<div style={{display:'flex', justifyContent: 'center'}}>
      {elm}
      <button
        className="btn"
        style={{ margin: "1rem auto", background: "gray", color: "red" }}
        onClick={auth.isAuthenticated ? auth.logout:auth.login}
      >
        {auth.isAuthenticated ? "Logout" : "Login"}
      </button>
    </div>);
};

export default Login;
import React, {useContext} from 'react';
import AuthContext from "./AuthContext";

const Login = (props) => {
    const auth=useContext(AuthContext);
    
    return (<button
        className="btn"
        style={{ margin: "1rem auto", background: "gray", color: "red" }}
        onClick={auth.isAuthenticated ? auth.logout:auth.login}
      >
        {auth.isAuthenticated ? "Logout" : "Login"}
      </button>);
};

export default Login;
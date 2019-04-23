import React, {useState} from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Persons from "./Persons";
import Posts from './Posts';
import Login from './Login';
import AuthContext from "./AuthContext";
import NavigationBar from './NavigationBar';



const App = (props) => {
    const [auth,setAuth]=useState(false);

    const handleLogin = () => {
        setAuth(true);
      };
    
    const handleLogout = () => {
        setAuth(false);
      };

      

    return (<div style={{textAlign: 'center'}}>
    <AuthContext.Provider
        value={{
          isAuthenticated: auth,
          login:handleLogin,
          logout: handleLogout
        }}
      >
      <BrowserRouter>
    <NavigationBar />
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/persons" component={Persons} />
            <Route  path="/posts" component={Posts} />
        </Switch>
    </BrowserRouter>
    </AuthContext.Provider>
    </div>);
};

export default App;
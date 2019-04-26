import React, {useContext, useState} from 'react';
import {Redirect} from 'react-router-dom';
import AuthContext from "./AuthContext";

import axios from 'axios';

const Login = (props) => {
    const auth=useContext(AuthContext);
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError] = useState('');
  
  
    const handleChange = (event) =>{
      if(event.target.name === 'email'){
        setEmail(event.target.value);
      }else if(event.target.name==='password'){
        setPassword(event.target.value);
      }
    }

    const elm =  auth.isAuthenticated?  <Redirect to="/posts"/>:  null;

    const handleLogin = ()=>{
      if(auth.isAuthenticated){
        auth.logout();
        return;
      }else{
        if(email === '' || password === '') return;
        login();
        if(error === 'signup') singUp();
      }
    }
    const login = async () =>{
      const obj= {
        email:email,
        password: password,
        returnSecureToken:true
      }
      try{
        const res = await axios.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDL7rD9vU--gfExl20eydCl5ejyvLNV6zc", obj);
        
        if(!res.data) throw new Error('unsuccessful registeration');
        if(res.data.registered){
          auth.login(res.data.email,res.data.idToken);
        }else{
          setError('signup');
        }      
      }catch(err){
        console.log(err);
        setError(err);
      }
    }

    const singUp = async () =>{
      const obj= {
        email:email,
        password: password,
        returnSecureToken:true
      }
      try{
        const res = await axios.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDL7rD9vU--gfExl20eydCl5ejyvLNV6zc", obj);
        
        if(!res.data) throw new Error('unsuccessful registeration');
        auth.login(res.data.email,res.data.idToken);
      }catch(err){
        console.log(err);
        setError(err);
      }
    }
    
    return (<div style={{display:'flex', justifyContent: 'center'}}>
      {elm}
      {!auth.isAuthenticated && (<div><section>
      <label>Email: </label>
      <input type="text" name="email" onChange={handleChange} value={email}/>
      </section>
      <section>
      <label>Password: </label>
      <input type="text" name="password" onChange={handleChange} value={password}/>
      </section></div>)}
      <div style={{marginTop: '2rem'}}>
      <button
        className="btn"
        style={{ margin: "1rem auto", background: "gray", color: "red" }}
        onClick={handleLogin}
      >
        {auth.isAuthenticated ? "Logout" : "Login"}
      </button>
      </div>
    </div>);
};

export default Login;
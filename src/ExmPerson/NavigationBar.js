import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import AuthContetx from './AuthContext';

const NavigationBar =()=>{
    const auth=useContext(AuthContetx);
    const style={display: 'inline', margin: '2rem', padding: '1rem'};
    return (<div><ul>
        <li style={style}>
            <Link to="/">{auth.isAuthenticated? 'Logout' : 'Login'}</Link>
        </li>
        <li style={style}>
            <Link to="/persons">Persons</Link>
        </li>
        <li style={style}>
            <Link to="/posts">Posts</Link>
        </li>
        </ul></div>)
}

export default NavigationBar;
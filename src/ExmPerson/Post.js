import React, {useContext, useState, useEffect} from 'react';
import axios from 'axios';

import AuthContext from './AuthContext';

import classes from './Post.module.css'

const Post = (props) => {
    const auth=useContext(AuthContext);
    const [modal,setModal] =useState(false);
    const [user,setUser]=useState(null);

    const showAuthorInfo = async () =>{
        try{
            const user = await axios.get('http://jsonplaceholder.typicode.com/users/'+props.post.userId);
            if(!user) throw new Error('no user to show');
            setModal(true);
            setUser(user.data);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        if(modal && user) {
            //console.log(user);
            props.showModal('user',user);
        }
    }, [modal,user])

    return (<div className={classes.Post}>
        <p className={classes.Title}>
           Title: {props.post.title}
        </p>
        <p className={classes.Author} onClick={showAuthorInfo}>Author: {props.post.author}</p>
        {auth.isAuthenticated && <p className={classes.Email}>Email: {props.post.email}</p>}
        <p>{props.post.body.substring(1,100)}...</p></div>);
};

export default Post;
import React from 'react';
import axios from 'axios';
import crypto from 'crypto';

import Post from './Post';
import classes from './Posts.module.css';
import Backdrop from './Backdrop';
import UserInfoModal from './UserInfoModal';


class Posts extends React.Component {
    constructor(props){
        super(props);
        this.state={posts:[], users:[], modalType: '', modalInfo:{}};
    }

    async componentDidMount(){
        try{
            const posts = await axios.get('http://jsonplaceholder.typicode.com/posts');
            const users= await axios.get('http://jsonplaceholder.typicode.com/users');
            if(!users || !posts) throw new Error('unsuccessfull get request');
            const postsWithUser = posts.data.map(post=>{
                const user = users.data.find(u => u.id === post.userId);
                return {...post, author: user.username, email: user.email};
            })
            this.setState({posts: postsWithUser, users: users.data});
        }catch(err){
            console.log(err);
        }
    }

    shouldComponentUpdate(){
        return true;
    }

    handleModal (type, data){
        if(!type) return;
        if(type === 'user'){
            console.log(type, data);
            console.log(this.state);
        }
    }

    render(){
        const list = this.state.posts.map(post=>
             <Post key={crypto.randomBytes(10).toString('hex')} post={post} showModal={this.handleModal}/>
        );

        return(<div className={classes.Posts}>
        {this.state.modalType !== '' && <Backdrop />}
        {this.state.modalType === 'user' && 
        (<UserInfoModal user={this.state.modalInfo}>User Information</UserInfoModal>)}
            {list}</div>)
    };
};

export default Posts;
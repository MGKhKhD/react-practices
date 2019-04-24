import React from "react";
import axios from "axios";
import crypto from "crypto";
import DataContext from "./DataContext";

import Post from "./Post";
import classes from "./Posts.module.css";
import UserInfoSection from "./UserInfoSection";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], users: [], modalType: "", modalInfo: {} };
  }

  async componentDidMount() {
    try {
      const posts = await axios.get(
        "http://jsonplaceholder.typicode.com/posts"
      );
      if (!posts) throw new Error("unsuccessfull get request");
      const users = await axios.get(
        "http://jsonplaceholder.typicode.com/users"
      );
      if (!users) throw new Error("unsuccessfull get request");
      const postsWithUser = posts.data.map(post => {
        const user = users.data.find(u => u.id === post.userId);
        return { ...post, author: user.username, email: user.email };
      });
      this.setState({ posts: postsWithUser, users: users.data });
    } catch (err) {
      console.log(err);
    }
  }

  handleModal(modalType, modalInfo) {
    if (!modalType) return;
    if (modalType === "user") {
      this.setState({ modalType, modalInfo });
    }
  }

  render() {
    const list = this.state.posts.map(post => (
      <Post
        key={crypto.randomBytes(10).toString("hex")}
        post={post}
        showModal={(type, data) => this.handleModal(type, data)}
      />
    ));

    return (
      <DataContext.Provider
        value={{ posts: this.state.posts, users: this.state.users }}
      >
        {this.state.modalType === "user" && (
          <UserInfoSection user={this.state.modalInfo}>
            User Information
          </UserInfoSection>
        )}
        <section className={classes.Posts}>{list}</section>
      </DataContext.Provider>
    );
  }
}

export default Posts;

import React from "react";
import axios from "./axios-config/axiosJsonPlaceholder";

import DataContext from "./DataContext";
import PostsList from "./PostsList";

import UserInfoSection from "./UserInfoSection";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], users: [], modalType: "", modalInfo: {} };
  }

  async componentDidMount() {
    try {
      const posts = await axios.get("/posts");
      if (!posts) throw new Error("unsuccessfull get request");
      const users = await axios.get("/users");
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
    return (
      <DataContext.Provider
        value={{ posts: this.state.posts, users: this.state.users }}
      >
        <UserInfoSection user={this.state.users[1]}>
          User Information
        </UserInfoSection>
        <PostsList posts={this.state.posts} />
      </DataContext.Provider>
    );
  }
}

export default Posts;

import React, { Component } from "react";

import axios from "axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], selectedPost: null };
  }

  componentDidMount() {
    let posts;
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.data)
      .then(data => {
        posts = data.slice(0, 4);
        return axios.get("https://jsonplaceholder.typicode.com/users");
      })
      .then(res => {
        const users = res.data;
        const augmentedPosts = posts.map(post => {
          const user = users.find(user => user.id === post.userId);

          return {
            ...post,
            user: user
          };
        });
        this.setState({ posts: augmentedPosts });
      })
      .catch(err => console.log(err));
  }

  handlePostClick = postId => {
    this.setState({ selectedPost: postId });
  };

  render() {
    const posts = this.state.posts.map(post => (
      <Post
        key={post.id}
        post={post}
        postClick={() => this.handlePostClick(post.id)}
      />
    ));

    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost postId={this.state.selectedPost} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;

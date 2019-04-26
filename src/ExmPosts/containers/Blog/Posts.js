import React from "react";
import { NavLink } from "react-router-dom";

import axios from "axios";
import "./Blog.css";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";

class Posts extends React.Component {
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
    //this.props.history.push({ pathname: "/" + postId });//if not usinng Link
  };

  render() {
    const posts = this.state.posts.map(post => (
      <NavLink
        key={post.id}
        to={{ pathname: "/" + post.id }}
        activeClassName="custom-link"
        activeStyle={{ textDecoration: "none" }}
      >
        <Post post={post} postClick={() => this.handlePostClick(post.id)} />
      </NavLink>
    ));
    return (
      <div>
        <section>
          <section className="Posts">{posts}</section>
        </section>
      </div>
    );
  }
}

export default Posts;

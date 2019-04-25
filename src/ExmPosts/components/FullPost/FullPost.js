import React, { Component } from "react";

import "./FullPost.css";
import Axios from "axios";

class FullPost extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: null, errorMessage: null };
  }

  componentDidUpdate() {
    if (this.props.postId && !this.state.errorMessage) {
      if (
        !this.state.loaded ||
        (this.state.loaded && this.state.loaded.id !== this.props.postId)
      ) {
        Axios.get(
          "https://jsonplaceholder.typicode.com/posts/" + this.props.postId
        )
          .then(res => {
            return res.data;
          })
          .then(res => this.setState({ loaded: res, errorMessage: null }))
          .catch(err =>
            this.setState({ errorMessage: "something went wrong!" })
          );
      }
    }
  }

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    const { loaded, errorMessage } = this.state;

    if (this.props.postId) {
      if (errorMessage) {
        post = (
          <p style={{ textAlign: "center", color: "red" }}>{errorMessage} </p>
        );
      } else {
        if (!loaded) {
          post = <p style={{ textAlign: "center" }}>Loading .... </p>;
        } else {
          post = (
            <div className="FullPost">
              <h1>{loaded.title}</h1>
              <p>{loaded.body}</p>
              <div className="Edit">
                <button className="Delete">Delete</button>
              </div>
            </div>
          );
        }
      }
    }

    return post;
  }
}

export default FullPost;

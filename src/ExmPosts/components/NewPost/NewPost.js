import React, { Component } from "react";

import axios from "axios";

import "./NewPost.css";

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      author: "Author1"
    };
  }

  submitPost() {
    const { title, content, author } = this.state;
    if (!title && !content) return;
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title,
        content,
        author
      })
      .then(res => res.data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="NewPost">
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={event => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={event => this.setState({ author: event.target.value })}
        >
          <option value="Author1">Author1</option>
          <option value="Author2">Author2</option>
        </select>
        <button onClick={this.submitPost.bind(this)}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;

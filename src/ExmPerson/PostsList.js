import React, { useReducer, useEffect } from "react";
import crypto from "crypto";
import DataContext from "./DataContext";

import Post from "./Post";
import classes from "./Posts.module.css";

const PostsList = ({ posts }) => {
  const indexReducer = (state, action) => {
    let rows = [...posts];
    switch (action) {
      case "NEXT": {
        const ind = state.index;
        if (ind < posts.length - 4) {
          return { index: ind + 4, postsToShow: rows.slice(ind, ind + 4) };
        }
        return {
          index: posts.length - 1,
          postsToShow: rows.slice(ind, posts.length - 1)
        };
      }
      case "PREV": {
        const ind = state.index;
        if (ind > 4) {
          return { index: ind - 4, postsToShow: rows.slice(ind - 4, ind) };
        }
        return { index: 0, postsToShow: rows.slice(0, ind) };
      }
      default: {
        return state;
      }
    }
  };

  const initState = { index: 4, postsToShow: posts };
  const [state, dispatch] = useReducer(indexReducer, initState);

  let list;
  if (state.postsToShow.length === 0) {
    list = posts
      .slice(0, 4)
      .map(post => (
        <Post
          key={crypto.randomBytes(10).toString("hex")}
          post={post}
          showModal={(type, data) => handleModal(type, data)}
        />
      ));
  } else {
    list = state.postsToShow.map(post => (
      <Post
        key={crypto.randomBytes(10).toString("hex")}
        post={post}
        showModal={(type, data) => handleModal(type, data)}
      />
    ));
  }

  const handleModal = (modalType, modalInfo) => {
    if (!modalType) return;
    if (modalType === "user") {
      console.log(modalType, modalInfo);
    }
  };

  return (
    <React.Fragment>
      {state.index < posts.length && (
        <button
          className={classes.ButtonR}
          onClick={() => {
            dispatch("NEXT");
          }}
        >
          NEXT
        </button>
      )}
      {state.index > 4 && (
        <button
          className={classes.ButtonL}
          onClick={() => {
            dispatch("PREV");
          }}
        >
          PREVIOUS
        </button>
      )}
      <section className={classes.Posts}>{list}</section>
    </React.Fragment>
  );
};

export default PostsList;
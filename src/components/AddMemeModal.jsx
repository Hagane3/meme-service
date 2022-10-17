import { useState } from "react";
import ReactDom from "react-dom";

import classes from "./AddMemeModal.module.css";

export const AddMemeModal = (props) => {
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const setUsernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const setTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const setUrlHandler = (event) => {
    setUrl(event.target.value);
  };

  const addMemeHandler = (event) => {
    event.preventDefault();
    props.setDatabase((prevData) => {
      console.log(prevData.length);
      prevData.push({
        username: username,
        id: prevData.length + 1,
        title: title,
        upvotes: 0,
        downvotes: 0,
        img: url,
      });
      console.log(prevData);
      return [...prevData];
    });
  };

  return ReactDom.createPortal(
    <div className={classes.modal}>
      <div className={classes.card}>
        <div className={classes.content}>
          <span
            onClick={props.openModalHandler}
            className="material-symbols-outlined"
          >
            close
          </span>
          <h1>Add your own meme!</h1>
          <form className={classes.inputs}>
            <label htmlFor="username">Username:</label>
            <input onChange={setUsernameHandler} id="username"></input>
            <label htmlFor="title">Title:</label>
            <input onChange={setTitleHandler} id="title"></input>
            <label htmlFor="image-url">Image url:</label>
            <input onChange={setUrlHandler} id="image-url"></input>
            <button onClick={addMemeHandler}>ADD MEME</button>
          </form>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

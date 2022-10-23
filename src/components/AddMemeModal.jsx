import { useState, useEffect, useCallback } from "react";
import ReactDom from "react-dom";

import classes from "./AddMemeModal.module.css";

export const AddMemeModal = (props) => {
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [isFormValid, setIsFormValid] = useState("");
  const [isFormSend, setIsFormSend] = useState(false);

  const setUsernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const setTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const setUrlHandler = (event) => {
    setUrl(event.target.value);
  };

  const validityHandler = useCallback(() => {
    console.log("checked");
    if (username.length >= 1 && title.length >= 1 && url.length >= 1) {
      setIsFormValid(true);
    } else if (!isFormSend) {
      setIsFormValid(false);
    }
  }, [title, url, username, isFormSend]);

  useEffect(() => {
    validityHandler();
  }, [validityHandler]);

  const addMemeHandler = (event) => {
    event.preventDefault();
    setIsFormSend(true);
    if (username.length >= 1 && title.length >= 1 && url.length >= 1) {
      props.setDatabase((prevData) => {
        prevData.push({
          username: username,
          id: prevData.length + 1,
          title: title,
          upvotes: 0,
          downvotes: 0,
          img: url,
        });
        setUsername("");
        setTitle("");
        setUrl("");
        props.closeModalHandler();
        return [...prevData];
      });
    }
  };

  return ReactDom.createPortal(
    <div className={classes.modal}>
      <div className={classes.card}>
        <div className={classes.content}>
          <span
            onClick={props.closeModalHandler}
            className="material-symbols-outlined"
          >
            close
          </span>
          <h1>Add your own meme!</h1>
          <form className={classes.inputs}>
            <label htmlFor="username">Username:</label>
            <input
              onChange={setUsernameHandler}
              value={username}
              id="username"
            ></input>
            <label htmlFor="title">Title:</label>
            <input onChange={setTitleHandler} value={title} id="title"></input>
            <label htmlFor="image-url">Image url:</label>
            <input onChange={setUrlHandler} value={url} id="image-url"></input>
            <button onClick={addMemeHandler}>ADD MEME</button>
            {isFormSend && !isFormValid ? (
              <p className={classes.warning}>Inputs cannot be empty!</p>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

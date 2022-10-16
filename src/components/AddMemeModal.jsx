import { useRef } from "react";
import ReactDom from "react-dom";

import classes from "./AddMemeModal.module.css";

export const AddMemeModal = (props) => {
  const usernameValue = useRef("");
  const titleValue = useRef("");
  const imageUrl = useRef("");

  const addMemeHandler = () => {
    props.setDatabase((prevData) => {
      console.log(prevData.length);
      prevData.push({
        username: usernameValue.current.value,
        id: prevData.length + 1,
        title: titleValue.current.value,
        upvotes: 5,
        downvotes: 2,
        img: imageUrl.current.value,
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
            class="material-symbols-outlined"
          >
            close
          </span>
          <h1>Add your own meme!</h1>
          <div className={classes.inputs}>
            <label htmlFor="username">Username:</label>
            <input ref={usernameValue} id="username"></input>
            <label htmlFor="title">Title:</label>
            <input ref={titleValue} id="title"></input>
            <label htmlFor="image-url">Image url:</label>
            <input ref={imageUrl} id="image-url"></input>
          </div>
          <button onClick={addMemeHandler}>ADD MEME</button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

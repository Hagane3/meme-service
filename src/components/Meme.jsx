import classes from "./Meme.module.css";
import { useContext } from "react";

import CartContext from "../CartContext";

export const Meme = (props) => {
  const { voteUpHandler, voteDownHandler } = useContext(CartContext);
  const details = props.details;

  return (
    <div className={classes.meme}>
      <h1>@{details.username}</h1>
      <h2>~ {details.title}</h2>
      <img src={details.img} alt="meme"></img>
      <div className={classes.vote}>
        <div className={classes.upvote}>
          <span>{details.upvotes}</span>
          <span
            onClick={() => {
              voteUpHandler(props.id);
            }}
            className={`${classes.thumbs} material-symbols-outlined`}
          >
            thumb_up
          </span>
        </div>
        <div className={classes.downvote}>
          <span>{details.downvotes}</span>
          <span
            onClick={() => {
              voteDownHandler(props.id);
            }}
            className={`${classes.thumbs} material-symbols-outlined`}
          >
            thumb_down
          </span>
        </div>
      </div>
    </div>
  );
};

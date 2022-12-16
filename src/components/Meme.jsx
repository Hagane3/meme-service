import classes from "./Meme.module.css";
import { useContext, useState } from "react";
import { ImSpinner2 } from "react-icons/im";

import CartContext from "../CartContext";

export const Meme = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  const { voteUpHandler, voteDownHandler } = useContext(CartContext);
  const details = props.details;

  return (
    <div className={classes.meme}>
      <h1>@{details.username}</h1>
      <h2>~ {details.title}</h2>
      {isLoading && (
        <div className={classes.loader}>
          <ImSpinner2 />
        </div>
      )}
      <img
        src={details.img}
        alt="meme"
        style={isLoading ? { display: "none" } : { display: "inline-block" }}
        onLoad={() => {
          setIsLoading(false);
        }}
      />
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

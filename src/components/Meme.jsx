import classes from "./Meme.module.css";

export const Meme = (props) => {
  const details = props.details;

  const voteUpHandler = () => {
    details.upvotes += 1;
    props.forceUpdate();
  };
  const voteDownHandler = () => {
    details.downvotes += 1;
    props.forceUpdate();
  };
  return (
    <div className={classes.meme}>
      <h1>{details.title}</h1>
      <img src={require(`../images/${details.img}`)}></img>
      <div className={classes.vote}>
        <div className={classes.upvote}>
          <span>{details.upvotes}</span>
          <span
            className={`${classes.thumbs} material-symbols-outlined`}
            onClick={voteUpHandler}
          >
            thumb_up
          </span>
        </div>
        <div className={classes.downvote}>
          <span>{details.downvotes}</span>
          <span
            className={`${classes.thumbs} material-symbols-outlined`}
            onClick={voteDownHandler}
          >
            thumb_down
          </span>
        </div>
      </div>
    </div>
  );
};

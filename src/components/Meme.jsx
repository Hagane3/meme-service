import classes from "./Meme.module.css";

export const Meme = (props) => {
  const details = props.details;
  return (
    <div className={classes.meme}>
      <h1>{details.title}</h1>
      <img></img>
      <div className={classes.vote}>
        <div className={classes.upvote}>
          <span>Upvotes: {details.upvotes}</span>
        </div>
        <div className={classes.downvote}>
          <span>Downvotes: {details.downvotes}</span>
        </div>
      </div>
    </div>
  );
};

import classes from "./Meme.module.css";

export const Meme = (props) => {
  console.log("MEME RENDERED");
  const details = props.details;

  return (
    <div className={classes.meme}>
      <h1>@{details.username}</h1>
      <h2>~ {details.title}</h2>
      <img src={details.img}></img>
      <div className={classes.vote}>
        <div className={classes.upvote}>
          <span>{details.upvotes}</span>
          <span
            onClick={() => {
              props.voteUp(props.id);
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
              props.voteDown(props.id);
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

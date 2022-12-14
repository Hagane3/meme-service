import classes from "./AddMemeButton.module.css";

export const AddMemeButton = (props) => {
  return (
    <button onClick={props.toggleModalHandler} className={classes}>
      <span className={classes.front}>Add Meme</span>
    </button>
  );
};

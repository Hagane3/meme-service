import classes from "./AddMeme.module.css";

export const AddMemeButton = (props) => {
  return (
    <button onClick={props.openModalHandler} className={classes}>
      Add Meme
    </button>
  );
};

import classes from "./AddMeme.module.css";

export const AddMeme = (props) => {
  return <button className={classes}>{props.children}</button>;
};

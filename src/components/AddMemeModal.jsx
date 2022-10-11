import ReactDom from "react-dom";

import classes from "./AddMemeModal.module.css";

export const AddMemeModal = () => {
  return ReactDom.createPortal(
    <div className={classes.modal}>
      <div className={classes.card}>
        <h1>MODAL</h1>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

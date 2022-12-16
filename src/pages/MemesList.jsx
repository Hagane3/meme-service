import { useContext } from "react";
import { Meme } from "../components/Meme";

import classes from "./MemesList.module.css";
import CartContext from "../CartContext";

export const MemesList = (props) => {
  const { data } = useContext(CartContext);

  const filteredArray = data.filter((item) => {
    if (props.category === "hot") {
      return item.upvotes - item.downvotes > 5;
    } else {
      return item.upvotes - item.downvotes <= 5;
    }
  });

  return (
    <ul className={classes.memes_list}>
      {filteredArray.map((item) => {
        return <Meme key={item.id} id={item.id} details={item} />;
      })}
    </ul>
  );
};

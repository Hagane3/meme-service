import { useContext } from "react";
import { Meme } from "../components/Meme";

import classes from "./HotMemesPage.module.css";
import CartContext from "../CartContext";

export const HotMemesPage = () => {
  const { data } = useContext(CartContext);

  const filteredArray = data.filter((item) => {
    return item.upvotes - item.downvotes > 5;
  });

  return (
    <ul className={classes.memes_list}>
      {filteredArray.map((item) => {
        return <Meme key={item.id} id={item.id} details={item} />;
      })}
    </ul>
  );
};

import { useState, useEffect } from "react";
import { Meme } from "../components/Meme";

import classes from "./MemesList.module.css";

export const MemesList = (props) => {
  console.log("MEME LIST RENDERED");

  const voteUpHandler = (id) => {
    props.setDatabase((prevData) => {
      prevData[id - 1].upvotes++;
      return [...prevData];
    });
  };

  const voteDownHandler = (id) => {
    props.setDatabase((prevData) => {
      prevData[id - 1].downvotes++;
      return [...prevData];
    });
  };

  const filteredArray = props.database.filter((data) => {
    if (props.category === "hot") {
      return data.upvotes - data.downvotes > 5;
    } else {
      return data.upvotes - data.downvotes <= 5;
    }
  });

  return (
    <ul className={classes.memes_list}>
      {filteredArray.map((item) => {
        return (
          <Meme
            key={item.id}
            id={item.id}
            details={item}
            voteUp={voteUpHandler}
            voteDown={voteDownHandler}
          />
        );
      })}
    </ul>
  );
};

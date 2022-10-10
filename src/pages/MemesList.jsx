import { useUpdateComponent } from "../hooks/useUpdateComponent";

import { Meme } from "../components/Meme";

import classes from "./MemesList.module.css";

export const MemesList = (props) => {
  const forceUpdate = useUpdateComponent();

  const filteredData = props.database.filter((data) => {
    if (props.category === "hot") {
      return data.upvotes - data.downvotes > 5;
    } else {
      return data.upvotes - data.downvotes <= 5;
    }
  });
  return (
    <ul className={classes.memes_list}>
      {filteredData.map((item) => {
        return (
          <Meme key={item.title} details={item} forceUpdate={forceUpdate} />
          // <li key={item.title}>
          //   {item.title}
          //   <button onClick={voteUpHandler}>VOTE UP</button>
          //   <button onClick={voteDownHandler}>VOTE DOWN</button>
          // </li>
        );
      })}
    </ul>
  );
};

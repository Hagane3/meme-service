import { useUpdateComponent } from "../hooks/useUpdateComponent";

import { Meme } from "../components/Meme";

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
    <ul>
      {filteredData.map((item) => {
        const voteUpHandler = () => {
          item.upvotes += 1;
          forceUpdate();
        };
        const voteDownHandler = () => {
          item.upvotes -= 1;
          forceUpdate();
        };
        return (
          <Meme key={item.title} details={item} />
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

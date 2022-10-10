import { useUpdateComponent } from "../hooks/useUpdateComponent";

export const Regular = (props) => {
  const forceUpdate = useUpdateComponent();

  const filteredData = props.database.filter((data) => {
    return data.upvotes - data.downvotes <= 5;
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
          <li key={item.title}>
            {item.title}
            <button onClick={voteUpHandler}>VOTE UP</button>
            <button onClick={voteDownHandler}>VOTE DOWN</button>
          </li>
        );
      })}
    </ul>
  );
};

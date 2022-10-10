import { useReducer } from "react";

export const useUpdateComponent = () => {
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  return forceUpdate;
};

import { createContext, useState } from "react";
import MEMES from "./data/memesDatabase";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [data, setData] = useState(MEMES);

  const setDataHandler = (value) => {
    setData(value);
  };

  const voteUpHandler = (id) => {
    setDataHandler((prevData) => {
      prevData[id - 1].upvotes++;
      return [...prevData];
    });
  };

  const voteDownHandler = (id) => {
    setDataHandler((prevData) => {
      prevData[id - 1].downvotes++;
      return [...prevData];
    });
  };

  return (
    <CartContext.Provider
      value={{ data, setDataHandler, voteDownHandler, voteUpHandler }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;

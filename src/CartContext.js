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
      prevData[prevData.findIndex((item) => item.id === id)].upvotes++;
      return [...prevData];
    });
  };

  const voteDownHandler = (id) => {
    setDataHandler((prevData) => {
      prevData[prevData.findIndex((item) => item.id === id)].downvotes++;
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
